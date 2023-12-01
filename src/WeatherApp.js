import React, { useState } from "react";
import clearIcon from "./Img/clear.png";
import humidityIcon from "./Img/humidity.png";
import windIcon from "./Img/wind.png";

import cloudIcon from "./Img/cloud.png";
import drizzleIcon from "./Img/drizzle.png";
import rainIcon from "./Img/rain.png";
import snowIcon from "./Img/snow.png";

export default function WeatherApp() {
  const [weatherIcon, setWeatherIcon] = useState(clearIcon);

  const searchFn = async () => {
    const searchInput = document.getElementsByClassName("searchInput");

    if (searchInput[0].value === "") {
      return 0;
    }

    const api_key = "41a6e1c78d5452cf5a9b50eb90aaa0d6";

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchInput[0].value}&units=Metric&appid=${api_key}`;

    const response = await fetch(url);
    let data = await response.json();

    const temperature = document.getElementsByClassName("tempar");
    const city = document.getElementsByClassName("city");
    const humidity = document.getElementsByClassName("humidityOfCity");
    const windSpeed = document.getElementsByClassName("windOfCity");

    temperature[0].innerHTML = Math.floor(data.main.temp) + "°C";
    city[0].innerHTML = data.name;
    humidity[0].innerHTML = data.main.humidity + "%";
    windSpeed[0].innerHTML = Math.floor(data.wind.speed) + "km/h";

    if (data.weather[0].icon === "03d" || data.weather[0].icon === "03n") {
      setWeatherIcon(cloudIcon);
    } else if (
      data.weather[0].icon === "02d" ||
      data.weather[0].icon === "02n"
    ) {
      setWeatherIcon(cloudIcon);
    } else if (
      data.weather[0].icon === "03d" ||
      data.weather[0].icon === "03n"
    ) {
      setWeatherIcon(drizzleIcon);
    } else if (
      data.weather[0].icon === "04d" ||
      data.weather[0].icon === "04n"
    ) {
      setWeatherIcon(drizzleIcon);
    } else if (
      data.weather[0].icon === "09d" ||
      data.weather[0].icon === "09n"
    ) {
      setWeatherIcon(rainIcon);
    } else if (
      data.weather[0].icon === "10d" ||
      data.weather[0].icon === "10n"
    ) {
      setWeatherIcon(rainIcon);
    } else if (
      data.weather[0].icon === "13d" ||
      data.weather[0].icon === "13n"
    ) {
      setWeatherIcon(snowIcon);
    } else {
      setWeatherIcon(clearIcon);
    }
  };

  return (
    <div className="containerWeather">
      <div className="container">
        <div className="searchInputDiv">
          <input
            type="text"
            required
            placeholder="Search"
            className="searchInput"
          />
          <button onClick={() => searchFn()}>
            <i className="bi bi-search"></i>
          </button>
        </div>
        <div className="weatherIcon">
          <img src={weatherIcon} alt="" />
        </div>

        <div className="tempCity">
          <h1 className="tempar">2°C</h1>
          <h3 className="city">London</h3>
        </div>

        <div className="humidWind">
          <div className="humidity">
            <div className="imgHumidity">
              {" "}
              <img src={humidityIcon} alt="" />
            </div>

            <div className="humidText">
              <h4 className="humidityOfCity">20%</h4>
              <h5>Humidity</h5>
            </div>
          </div>

          <div className="wind">
            <div className="imgWind">
              {" "}
              <img src={windIcon} alt="" />
            </div>

            <div className="windText">
              <h4 className="windOfCity">20 km/h</h4>
              <h5>Wind Speed</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
