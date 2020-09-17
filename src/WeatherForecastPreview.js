import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastPreview(props) {
  function hours() {
    let date = new Date(props.data.dt * 1000);
    let hours = date.getHours();
    return `${hours}:00`;
  }

  function temperature() {
    return Math.round(props.data.main.temp);
  }

  return (
    <div className="col-2">
      {hours()}
      <WeatherIcon icon={props.data.weather[0].icon} />
      {temperature()}˚C
    </div>
  );
}
