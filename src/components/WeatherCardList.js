import React, { useRef, useEffect } from "react";
import WeatherCard from "./WeatherCard";

const WeatherCardList = props => {
  const container = useRef();

  const handleClick = e => {
    if (container.current.contains(e.target)) {
      return;
    }
    props.displayHourly([]);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  const cardList = props.forecasts.map(forecast => {
    return (
      <WeatherCard
        key={forecast.date}
        forecast={forecast}
        displayHourly={props.displayHourly}
      />
    );
  });
  return (
    <div ref={container} className="weatherCardList">
      {cardList}
    </div>
  );
};

export default WeatherCardList;
