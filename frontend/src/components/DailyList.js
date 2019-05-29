import React from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import WeatherDate from "./Weather/WeatherDate";
import Divider from "@material-ui/core/Divider";
import WeatherIcon from "./Weather/WeatherIcon";
import { convertToF } from "../helpers";

const DailyList = ({ daily, settings }) => {
  const { units } = settings;

  const renderDaily = data => {
    return data.map(day => (
      <React.Fragment key={day.time}>
        <Grid alignItems={"center"} container container spacing={8}>
          <Grid item xs={8}>
            <WeatherDate
              color={"textPrimary"}
              align={"left"}
              time={day.time}
              dateFormat={"eeee, MMM d"}
            />
            <Typography align={"left"} color={"textPrimary"}>
              {day.summary}
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <WeatherIcon icon={day.icon} />
          </Grid>
          <Grid container direction={"column"} item xs={2}>
            <Typography align={"right"} color={"textPrimary"}>
              <b>{`${Math.floor(
                units === "METRIC"
                  ? day.temperatureMax
                  : convertToF(day.temperatureMax)
              )}°${units === "METRIC" ? "C" : "F"}`}</b>
            </Typography>
            <Typography align={"right"} color={"textSecondary"}>
              {`${Math.floor(
                units === "METRIC"
                  ? day.temperatureMin
                  : convertToF(day.temperatureMin)
              )}°${units === "METRIC" ? "C" : "F"}`}
            </Typography>
          </Grid>
        </Grid>
        <Divider />
      </React.Fragment>
    ));
  };

  return (
    <div>
      <Divider /> {renderDaily(daily.data)}
    </div>
  );
};

DailyList.propTypes = {
  daily: PropTypes.object
};

export default DailyList;
