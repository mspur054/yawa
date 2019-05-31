import React from "react";

const WeatherIcon = ({ icon, ...other }) => {
  return (
    <>
      <img
        {...other}
        alt={icon}
        src={`/icons/${!icon ? "cloudy" : icon}.svg`}
      />
    </>
  );
};

export default WeatherIcon;
