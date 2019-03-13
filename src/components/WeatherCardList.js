import React, { useState } from "react";
import WeatherCard from "./WeatherCard";

const WeatherCardList = props => {
  const [active, setActive] = useState(false);
  const cardList = props.forecasts.map(forecast => {
    return <WeatherCard key={forecast.date} forecast={forecast} />;
  });
  return <div className="weatherCardList">{cardList}</div>;
};

export default WeatherCardList;
