import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.name,
      date: "Thursday 12:00",
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      iconUrl: "https://ssi.gstatic.com/onebox/weather/64/partly_cloudy.png",
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
    });
  }
  if (weatherData.ready) {
    return (
      <div className="App">
        <div className="row">
          <div className="col-4">
            <div className="card" styles="width: 150px">
              <div className="card-body">
                <p className="today-temperature">
                  <span>{Math.round(weatherData.temperature)}°</span>
                  <br />
                  <a href="/">C</a> |<a href="/"> F</a>
                </p>
                <img src={weatherData.imgUrl} alt={weatherData.description} />
              </div>
            </div>
          </div>
          <div className="col-8">
            <h1>{weatherData.city}</h1>
            <h3>
              Last updated: <span>{weatherData.date}</span>
            </h3>
            <ul>
              <li>{weatherData.description}</li>
              <li>
                Humidity: <span>{weatherData.humidity}</span>%
              </li>
              <li>
                Wind Speed: <span>{weatherData.wind}</span> km/hr
              </li>
            </ul>
          </div>
        </div>
        <br />
        <div className="row"></div>
        <br />
        <script src="src/script.js"></script>
      </div>
    );
  } else {
    const apiKey = "e557d742ef6457c9163f2c8c41a40455";
    let city = "Vancouver";
    let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
