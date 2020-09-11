import React from "react";

export default function Forecast() {
  return (
    <div className="card">
      <div className="card-body">
        <div className="row card-text" id="forecast">
          <div className="col-2">
            <h3>Mon</h3>
            <img
              src="https://raw.githubusercontent.com/laura-dumitru/Weather-App/master/img/01d.svg"
              alt="description"
            />
            <div className="weather-forecast-temperature">
              <strong>18˚</strong>|14˚
            </div>
          </div>
          <div className="col-2">
            <h3>Tue</h3>
            <img
              src="https://raw.githubusercontent.com/laura-dumitru/Weather-App/master/img/11n.svg"
              alt="description"
            />
            <div className="weather-forecast-temperature">
              <strong>20˚</strong>|13˚
            </div>
          </div>
          <div className="col-2">
            <h3>Wed</h3>
            <img
              src="https://raw.githubusercontent.com/laura-dumitru/Weather-App/master/img/02d.svg"
              alt="description"
            />
            <div className="weather-forecast-temperature">
              <strong>13˚</strong>|5˚
            </div>
          </div>
          <div className="col-2">
            <h3>Thu</h3>
            <img
              src="https://raw.githubusercontent.com/laura-dumitru/Weather-App/master/img/13n.svg"
              alt="description"
            />
            <div className="weather-forecast-temperature">
              <strong>-5˚</strong>|-10˚
            </div>
          </div>
          <div className="col-2">
            <h3>Fri</h3>
            <img
              src="https://raw.githubusercontent.com/laura-dumitru/Weather-App/master/img/09d.svg"
              alt="description"
            />
            <div className="weather-forecast-temperature">
              <strong>15˚</strong>|5˚
            </div>
          </div>
          <div className="col-2">
            <h3>Sat</h3>
            <img
              src="https://raw.githubusercontent.com/laura-dumitru/Weather-App/master/img/03d.svg"
              alt="description"
            />
            <div className="weather-forecast-temperature">
              <strong>12˚</strong>|9˚
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
