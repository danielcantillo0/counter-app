import { Component } from "react";
import './weather.styles.css'

class Weather extends Component {
  render() {
    const {citySearch, fetchWeather, weather} = this.props;

    return (
      <>
        <h3>Weather App</h3>
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
      </>
    );
  }
}

export default Weather;
