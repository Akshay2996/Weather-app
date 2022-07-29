import "./current-weather.css";

const CurrentWeather = ({ data }) => {
  return (
    <section className="weather">
      <article className="top">
        <aside>
          <p className="city">{data.city}</p>
          <p className="weather-description">{data.weather[0].description}</p>
        </aside>
        <img
          alt="weather"
          className="weather-icon"
          src={`icons/${data.weather[0].icon}.png`}
        />
      </article>

      <article className="bottom">
        <p className="temperature">{Math.round(data.main.temp)}ºC</p>

        <aside className="details">
          <div className="parameter-row">
            <span className="parameter-label">Details</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Feels like</span>
            <span className="parameter-value">
              {Math.round(data.main.feels_like)}ºC
            </span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Wind</span>
            <span className="parameter-value">{data.wind.speed} m/s</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Humidity</span>
            <span className="parameter-value">{data.main.humidity}%</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Pressure</span>
            <span className="parameter-value">{data.main.pressure} hpa</span>
          </div>
        </aside>
      </article>
    </section>
  );
};

export default CurrentWeather;
