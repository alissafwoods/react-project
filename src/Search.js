import React from "react";
import "./Search.css";

export default function Search() {
  return (
    <div className="row">
      <div className="col-7">
        <form id="citySearch">
          <label for="city"> Search for a city: </label>
          <input type="text" id="city" autocomplete="off" />
          <input type="submit" id="submit" value="Submit" />
        </form>
      </div>
      <div className="col-5">
        <button id="current-location-button">Current Location</button>
      </div>
    </div>
  );
}
