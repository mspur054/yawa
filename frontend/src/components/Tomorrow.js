import React from "react";
import WeatherContent from "./WeatherContent";
import CollapseWeather from "./CollapseWeather";
import Typography from "@material-ui/core/Typography";

const Tomorrow = () => {
  return (
    <WeatherContent>
      Tomorrow's Weather
      <CollapseWeather>
        <Typography>Hi</Typography>
      </CollapseWeather>
    </WeatherContent>
  );
};
export default Tomorrow;
