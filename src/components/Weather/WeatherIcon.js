import React from "react";

const WeatherIcon = props => {
  return (
    <>
      <img
        alt={props.icon}
        src={`/icons/${!props.icon ? "cloudy" : props.icon}.svg`}
      />
    </>
  );
};

export default WeatherIcon;
