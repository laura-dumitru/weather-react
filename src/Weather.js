import React from "react";

export default function Search(props) {
  return (
    <div className="row">
      <div className="col-6">
        <h1 id="city"> </h1>
        <ul>
          <li className="date">Friday 21 August</li>
          <li>16:26</li>
        </ul>
        <ul>
          <li id="description">Rain</li>

          <li>
            Humidity: <span id="humidity">78%</span>
          </li>
          <li>
            Wind: <span id="wind">3km/h</span>
          </li>
        </ul>
        <br />
        <div className="temperature">
          <strong id="temperature">{props.value}</strong>
          <small>
            <span id="celsius">˚C</span>|<span id="fahrenheit">˚F</span>
          </small>
        </div>
      </div>

      <div className="col-6">
        <img
          className="main-icon"
          src="https://raw.githubusercontent.com/laura-dumitru/Weather-App/master/img/09d.svg"
          alt="icon"
        />
      </div>
    </div>
  );
}
