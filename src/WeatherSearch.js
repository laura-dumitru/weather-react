import React, { useState } from "react";
import axios from "axios";
import WeatherTemperature from "./WeatherTemperature";
import FormattedDate from "./FormattedDate";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function WeatherSearch(props) {
  const [weather, setWeather] = useState({ ready: false, city: props.city });

  const apiKey = "e3dda97cfe9d9fc23a4b5fa7130913b1";
  let url = `http://api.openweathermap.org/data/2.5/weather?q=${weather.city}&appid=${apiKey}&units=metric`;

  function handleSubmit(event) {
    event.preventDefault();
    axios.get(url).then(handleResponse);
  }

  function updateCity(event) {
    url = `http://api.openweathermap.org/data/2.5/weather?q=${event.target.value}&appid=${apiKey}&units=metric`;
  }

  function handleResponse(response) {
    setWeather({
      ready: true,
      date: new Date(response.data.dt * 1000),
      city: response.data.name,
      description: response.data.weather[0].description,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: `https://raw.githubusercontent.com/laura-dumitru/Weather-App/master/img/${response.data.weather[0].icon}.svg`,
    });
  }

  let form = (
    <form className="row" id="search-form" onSubmit={handleSubmit}>
      <div className="form-group col-6">
        <input
          type="search"
          onChange={updateCity}
          placeholder="Enter city"
          className="form-control"
          autoFocus="on"
          aria-describedby="searchCity"
          id="inputCity"
        />
      </div>
      <input type="submit" value="Search" className="btn" />

      <button type="button" className="btn location col-1">
        <FontAwesomeIcon icon={faMapMarkerAlt} className="fas" />
      </button>
    </form>
  );

  if (weather.ready) {
    return (
      <div>
        {form}
        <div className="row">
          <div className="col-6">
            <h1 id="city">{weather.city}</h1>
            <ul>
              <li className="date">
                <FormattedDate date={weather.date} />
              </li>
            </ul>
            <ul>
              <li id="description">{weather.description}</li>
              <li>
                Humidity: <span id="humidity">{weather.humidity}%</span>
              </li>
              <li>
                Wind: <span id="wind">{weather.wind}km/h</span>
              </li>
            </ul>
            <br />
            <WeatherTemperature celsius={weather.temperature} />
          </div>

          <div className="col-6">
            <img className="main-icon" src={weather.icon} alt="icon" />
          </div>
        </div>
      </div>
    );
  } else {
    axios.get(url).then(handleResponse);
    return form;
  }
}
