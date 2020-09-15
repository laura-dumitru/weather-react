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
      <div className="temperature">
        <strong id="temperature">{Math.round(props.celsius)}</strong>
        <small>
          <span id="celsius">˚C</span>|
          <span id="fahrenheit">
            <a href="/" onClick={convertToFahrenheit}>
              ˚F
            </a>
          </span>
        </small>
      </div>
    );
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;
    return (
      <div className="temperature">
        <strong id="temperature">{Math.round(fahrenheit)}</strong>
        <small>
          <span id="celsius">
            <a href="/" onClick={convertToCelsius}>
              ˚C
            </a>
          </span>
          |<span id="fahrenheit">˚F</span>
        </small>
      </div>
    );
  }
}
