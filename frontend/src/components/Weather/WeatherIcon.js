import React from "react";

const WeatherIcon = ({ icon }) => {
  return (
    <>
      <img alt={icon} src={`/icons/${!icon ? "cloudy" : icon}.svg`} />
    </>
  );
};

export default WeatherIcon;
