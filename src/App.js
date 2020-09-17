import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./styles.css";
import Footer from "./Footer";
import WeatherSearch from "./WeatherSearch";

export default function App() {
  return (
    <div className="weather-app">
      <div className="container">
        <WeatherSearch city="New York" />
      </div>
      <Footer />
    </div>
  );
}
