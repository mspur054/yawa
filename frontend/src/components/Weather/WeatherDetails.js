import React from "react";
import PropTypes from "prop-types";
import Typography from "@material-ui/core/Typography";
import { convertToMph, convertToF } from "../../helpers";

const WeatherDetails = ({ data, units }) => {
  const {
    precipProbability,
    humidity,
    windSpeed,
    apparentTemperature
  } = data.currently;

  function renderWind() {
    const metricWind = (windSpeed * 3.6).toFixed(1);
    return units === "METRIC"
      ? `${metricWind} km/h`
      : `${convertToMph(metricWind).toFixed(1)} mp/h`;
  }

  return (
    <React.Fragment>
      <Typography>DETAILS</Typography>

      <Typography>{`Feels Like: ${Math.floor(
        units === "METRIC"
          ? apparentTemperature
          : convertToF(apparentTemperature)
      )}°${units === "METRIC" ? "C" : "F"}`}</Typography>
      <Typography>{`Precipitation: ${precipProbability}%`}</Typography>
      <Typography>{`Humidity: ${Math.round(humidity * 100)}%`}</Typography>
      <Typography>{`Wind: ${renderWind()}`}</Typography>
    </React.Fragment>
  );
};

WeatherDetails.propTypes = {
  data: PropTypes.object,
  units: PropTypes.string
};

export default WeatherDetails;
