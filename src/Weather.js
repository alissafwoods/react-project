import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import FormattedDate from "./FormattedDate.js";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature.js";
import WeatherForecast from "./WeatherForecast.js";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      icon: response.data.weather[0].icon,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "e557d742ef6457c9163f2c8c41a40455";
    let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div className="App">
        <div className="row">
          <div className="col-4">
            <div className="card mb-4 border-0">
              <div className="card-body">
                <p className="today-temperature">
                  <WeatherTemperature celsius={weatherData.temperature} />
                </p>
                <WeatherIcon code={weatherData.icon} />
              </div>
            </div>
          </div>
          <div className="col-8">
            <h1>{weatherData.city}</h1>
            <h4>
              <FormattedDate date={weatherData.date} />
            </h4>
            <ul>
              <li>{weatherData.description}</li>
              <li>
                Humidity: <span>{weatherData.humidity}</span>%
              </li>
              <li>
                Wind Speed: <span>{Math.round(weatherData.wind)}</span> km/hr
              </li>
            </ul>
          </div>
        </div>
        <WeatherForecast city={weatherData.city} />
        <br />

        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-4">
              <input
                type="search"
                autocomplete="off"
                placeholder="Search for a city..."
                autoFocus="on"
                onChange={handleCityChange}
              />
            </div>

            <div className="col-3">
              <input type="submit" value="Search" />
            </div>
          </div>
        </form>
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
