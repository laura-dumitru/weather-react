import React, { useState } from "react";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Search() {
  let [city, setCity] = useState("");
  let [text, setText] = useState("");
  function handleSubmit(event) {
    event.preventDefault();

    setText(`It's 21˚C in ${city}`);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  return (
    <form className="row" id="search-form" onSubmit={handleSubmit}>
      <div className="form-group col-6">
        <input
          type="search"
          onChange={updateCity}
          placeholder="Enter city"
          className="form-control"
          aria-describedby="searchCity"
          id="inputCity"
        />
      </div>
      <input type="submit" value="Search" className="btn" />

      <button type="button" className="btn location col-1">
        <FontAwesomeIcon icon={faMapMarkerAlt} className="fas" />
      </button>
      <h1>{text}</h1>
    </form>
  );
}
