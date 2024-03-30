import React, { useState } from "react";
import styled from "styled-components";
import Axios from "axios";
import CityComponent from "./components/CityComponent";
import WeatherComponent from "./components/WeatherInfoComponent";




export const WeatherIcons = {
  "01d": "/my-app/src/assets/icons/sunny.svg",
  "01n": "/my-app/icons/night.svg",
  "02d": "/my-app/src/assets/icons/day.svg",
  "02n": "/my-app/icons/cloudy-night.svg",
  "03d": "/my-app/icons/cloudy.svg",
  "03n": "/my-app/icons/cloudy.svg",
  "04d": "/my-app/icons/perfect-day.svg",
  "04n": "/my-app/icons/cloudy-night.svg",
  "09d": "/my-app/icons/rain.svg",
  "09n": "/my-app/icons/rain-night.svg",
  "10d": "/my-app/icons/rain.svg",
  "10n": "/my-app/icons/rain-night.svg",
  "11d": "/my-app/icons/storm.svg",
  "11n": "/my-app/icons/storm.svg",
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 380px;
  padding: 20px 10px;
  margin: auto;
  border-radius: 4px;
  box-shadow: 0 3px 6px 0 #555;
  background: white;
  font-family: Montserrat;
`;

const AppLabel = styled.span`
  color: black;
  margin: 20px auto;
  font-size: 18px;
  font-weight: bold;
`;
const CloseButton = styled.span`
  padding: 2px 3px;
  background-color: black;
  border-radius: 50%;
  color: white;
  position: absolute;
`;

function WeatherApp() {
  const [city, updateCity] = useState();
  const [weather, updateWeather] = useState();
  const fetchWeather = async (e) => {
    e.preventDefault();
    const response = await Axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=fe4feefa8543e06d4f3c66d92c61b69c`,
    );
    updateWeather(response.data);
  };
  return (
    <Container>
      <AppLabel>React Weather App</AppLabel>
      {city && weather ? (
        <WeatherComponent weather={weather} city={city} />
      ) : (
        <CityComponent updateCity={updateCity} fetchWeather={fetchWeather} />
      )}
    </Container>
  );
}

export default WeatherApp;