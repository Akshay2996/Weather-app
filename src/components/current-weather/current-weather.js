import "./current-weather.css";

const CurrentWeather = () => {
  return (
    <section className="weather">
      <article className="top">
        <aside>
          <p className="city">Belgrade</p>
          <p className="weather-description">Sunny</p>
        </aside>
        <img alt="weather" className="weather-icon" src="icons/01d.png" />
      </article>

      <article className="bottom">
        <p className="temperature">18ºC</p>

        <aside className="details">
          <div className="parameter-row">
            <span className="parameter-label">Details</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Feels like</span>
            <span className="parameter-value">22ºC</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Wind</span>
            <span className="parameter-value">2 m/s</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Humidity</span>
            <span className="parameter-value">15%</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Pressure</span>
            <span className="parameter-value">15 hpa</span>
          </div>
        </aside>
      </article>
    </section>
  );
};

export default CurrentWeather;
