import { useState } from "react";
import "./weather.styles.css";

const Weather = () => {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState({});

  const citySearch = (event) => {
    setCity(event.target.value)
  };

  const fetchWeather = () => {
    fetch("https://api.api-ninjas.com/v1/weather?city=" + city, {
      method: "GET",
      headers: {
        // eslint-disable-next-line
        "X-Api-Key": "${{secret.API_KEY}}",
      },
    })
      .then((response) => response.json())
      .then((weather) => setWeather(weather));
  };


  return (
    <div className="weather-container">
      <h3>Weather</h3>
      <input
        className="input-box"
        type="search"
        placeholder="City..."
        onChange={citySearch}
      />
      <button onClick={fetchWeather} className="weather-button">
        Get Weather Info
      </button>
      {weather.temp && (
        <div className="temp-display">
          the temperature is {weather.temp}
          °C
        </div>
      )}
    </div>
  );
};

export default Weather;
