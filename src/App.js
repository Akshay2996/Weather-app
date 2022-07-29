import { useState } from "react";
import { WEATHER_API_KEY, WEATHER_API_URL } from "./components/api";
import CurrentWeather from "./components/current-weather/current-weather";
import Search from "./components/search/search";
import "./styles.css";

export default function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const handleSearch = (searchData) => {
    const [lat, long] = searchData.value.split(":");

    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${long}&appid=${WEATHER_API_KEY}&units=metric`
    );
    const forecastFetch = fetch(
      `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${long}&appid=${WEATHER_API_KEY}&units=metric`
    );

    Promise.allSettled([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].value.json();
        const forecastResponse = await response[1].value.json();

        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        setForecast({ city: searchData.label, ...forecastResponse });
      })
      .catch((err) => console.error(err));
  };

  console.log("Weather", currentWeather);
  console.log("Forecast", forecast);

  return (
    <main className="container">
      <Search onSearchChange={handleSearch} />
      {currentWeather ? <CurrentWeather data={currentWeather} /> : null}
    </main>
  );
}
