import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  const [ready, setReady] = useState(false);
  const [temperature, setTemperature] = useState(null);
  function handleResponse(response) {
    setTemperature(response.data.main.temp);
    setReady(true);
  }
  if (ready) {
    return (
      <div className="App">
        <div className="row">
          <div className="col-4">
            <div className="card" styles="width: 150px">
              <div className="card-body">
                <p className="today-temperature">
                  <span>11°</span>
                  <br />
                  <a href="/">C</a> |<a href="/"> F</a>
                </p>
              </div>
            </div>
          </div>
          <div className="col-8">
            <h1>Vancouver</h1>
            <h3>
              Last updated: <span>Thursday 19:58</span>
            </h3>
            <ul>
              <li>Sunny</li>
              <li>
                Humidity: <span>60</span>%
              </li>
              <li>
                Wind Speed: <span>3</span> km/hr
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
