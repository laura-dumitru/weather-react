import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./styles.css";
import Footer from "./Footer";
import Search from "./Search";
import Weather from "./Weather";
import Forecast from "./Forecast";

export default function App() {
  return (
    <div className="weather-app">
      <div className="container">
        <Search />
        <Weather value="21" />
        <Forecast />
      </div>
      <Footer />
    </div>
  );
}
