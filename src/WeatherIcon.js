import React from "react";

export default function WeatherIcon(props) {
  let url = `https://raw.githubusercontent.com/laura-dumitru/Weather-App/master/img/${props.icon}.svg`;
  return <img src={url} alt="icon" />;
}
