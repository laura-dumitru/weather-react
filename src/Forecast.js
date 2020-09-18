import React, { useState } from "react";
import axios from "axios";
import WeatherForecastPreview from "./WeatherForecastPreview";

export default function Forecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);
  const [lastSearch, setLastSearch] = useState("");

  function handleForecastResponse(response) {
    setForecast(response.data);
    setLoaded(true);
    setLastSearch(props.city);
  }

  if (loaded && props.city === lastSearch) {
    return (
      <div className="card">
        <div className="card-body">
          <div className="row card-text" id="forecast">
            <WeatherForecastPreview data={forecast.list[0]} />
            <WeatherForecastPreview data={forecast.list[1]} />
            <WeatherForecastPreview data={forecast.list[2]} />
            <WeatherForecastPreview data={forecast.list[3]} />
            <WeatherForecastPreview data={forecast.list[4]} />
            <WeatherForecastPreview data={forecast.list[5]} />
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "e3dda97cfe9d9fc23a4b5fa7130913b1";
    let url = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(handleForecastResponse);
    return null;
  }
}
