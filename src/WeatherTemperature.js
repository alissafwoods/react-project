import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function convertToFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function convertToCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <div className="WeatherTemperature">
        <div className="row">
          <span className="temperature">{Math.round(props.celsius)}°</span>
        </div>
        <div className="row">
          <span className="unit">
            C |{" "}
            <a href="/" onClick={convertToFahrenheit}>
              F
            </a>
          </span>
        </div>
      </div>
    );
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;
    return (
      <div className="WeatherTemperature">
        <span className="temperature">{Math.round(fahrenheit)}°</span>
        <span className="unit">
          <a href="/" onClick={convertToCelsius}>
            C
          </a>{" "}
          | F
        </span>
      </div>
    );
  }
}
