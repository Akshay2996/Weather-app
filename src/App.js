import CurrentWeather from "./components/current-weather/current-weather";
import Search from "./components/search/search";
import "./styles.css";

export default function App() {
  const handleSearch = (searchData) => {
    console.log(searchData);
  };
  return (
    <main className="container">
      <Search onSearchChange={handleSearch} />
      <CurrentWeather />
    </main>
  );
}
