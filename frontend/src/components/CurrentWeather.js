import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import ArrowDropDown from "@material-ui/icons/ArrowDropDown";

import WeatherContent from "./WeatherContent";
import CollapseWeather from "./CollapseWeather";
import Hourly from "./Hourly";
import WeatherIcon from "./Weather/WeatherIcon";
import WeatherDate from "./Weather/WeatherDate";
import WeatherDetails from "./Weather/WeatherDetails";
import DailyChart from "./graph/DailyChart";
import { convertToF } from "../helpers";
import { useStateValue } from "../contexts/StateProvider";
import ClothingDetails from "./Clothing/ClothingDetails";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  }
});

const CurrentWeather = props => {
  const { classes } = props;

  const [{ data, settings, location }, dispatch] = useStateValue();
  const { currently } = data;
  const { units } = settings;
  //TODO: change the way this works
  function renderBtn() {
    if (settings.units === "METRIC") {
      return "Farenheit";
    } else {
      return "METRIC";
    }
  }

  function renderTemp() {
    return `Feels like ${Math.floor(
      settings.units === "METRIC"
        ? data.currently.apparentTemperature
        : convertToF(data.currently.apparentTemperature)
    )}°${settings.units === "METRIC" ? "C" : "F"}`;
  }

  return (
    <WeatherContent>
      {data.isLoading ? (
        <div>Loading...</div>
      ) : (
        <Grid container spacing={16}>
          <Grid align="center" item xs={12} sm={12}>
            <Typography variant="h4">{currently.summary}</Typography>
            <WeatherIcon style={{ height: "200px" }} icon={currently.icon} />
            {/* <WeatherDate
              time={data.currently.time}
              dateFormat={"eee MMM d, pa"}
            /> */}
          </Grid>
          <Grid item xs={6} sm container>
            <Grid item xs={12}>
              <Typography variant="h3">{`${Math.floor(
                units === "METRIC"
                  ? currently.temperature
                  : convertToF(currently.temperature)
              )}°${units === "METRIC" ? "C" : "F"}`}</Typography>
            </Grid>
            <Grid item xs={3}>
              <ArrowDropDown />
            </Grid>
            <Grid item xs={3}>
              <Typography>{`${Math.floor(
                units === "METRIC"
                  ? data.daily.data[0].temperatureMin
                  : convertToF(data.daily.data[0].temperatureMin)
              )}°${units === "METRIC" ? "C" : "F"}`}</Typography>
            </Grid>
            <Grid item xs={3}>
              'Arrow up goes here'
            </Grid>
            <Grid item xs={3}>
              <Typography>{`${Math.floor(
                units === "METRIC"
                  ? data.daily.data[0].temperatureMax
                  : convertToF(data.daily.data[0].temperatureMax)
              )}°${units === "METRIC" ? "C" : "F"}`}</Typography>
            </Grid>
          </Grid>
          <Grid align="left" item xs={6}>
            <WeatherDetails data={data} units={units} />
          </Grid>
          <Grid item sm={12} xs={12}>
            <DailyChart units={units} hourly={data.hourly.data} />
            <ClothingDetails
              apparentTemperature={currently.apparentTemperature}
            />
          </Grid>
          <Grid align="center" item sm={12} xs={12}>
            <CollapseWeather>
              <Hourly units={units} hourly={data.hourly} />
            </CollapseWeather>
          </Grid>
        </Grid>
      )}
    </WeatherContent>
  );
};

export default withStyles(styles)(CurrentWeather);
