import React from "react";
import Typography from "@material-ui/core/Typography";
import { convertToMph } from "../../helpers";

const WeatherDetails = ({ data, siUnits }) => {
  const { precipProbability, humidity, windSpeed } = data.currently;

  function renderWind() {
    const metricWind = (windSpeed * 3.6).toFixed(1);
    return siUnits === "si"
      ? `${metricWind} km/h`
      : `${convertToMph(metricWind).toFixed(1)} mp/h`;
  }

  return (
    <React.Fragment>
      <Typography>{`Precipitation: ${precipProbability}%`}</Typography>
      <Typography>{`Humidity: ${Math.round(humidity * 100)}%`}</Typography>
      <Typography>{`Wind: ${renderWind()}`}</Typography>
    </React.Fragment>
  );
};

export default WeatherDetails;
