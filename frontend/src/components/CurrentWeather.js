import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import WeatherContent from "./WeatherContent";
import CollapseWeather from "./CollapseWeather";
import Hourly from "./Hourly";
import WeatherIcon from "./Weather/WeatherIcon";
import WeatherDate from "./Weather/WeatherDate";
import WeatherDetails from "./Weather/WeatherDetails";
import DailyChart from "./graph/DailyChart";
import { convertToF, formatAddress } from "../helpers";
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
          <Grid align="left" item xs={12} sm={12}>
            <Typography variant="h6" align="left" gutterBottom>
              {!location.isLoading ? formatAddress(location.address) : null}
            </Typography>
            <WeatherDate
              time={data.currently.time}
              dateFormat={"eee MMM d, pa"}
            />
            <Typography>{data.currently.summary}</Typography>
          </Grid>
          <Grid item xs={9} sm container>
            <WeatherIcon icon={data.currently.icon} />
            <Typography variant="h5">{renderTemp()}</Typography>
          </Grid>
          <Grid align="left" item xs={3}>
            <WeatherDetails data={data} units={settings.units} />
          </Grid>
          <Grid item sm={12} xs={12}>
            <Button
              variant="contained"
              color="primary"
              className={classes.margin}
              onClick={() =>
                settings.units === "METRIC"
                  ? dispatch({ type: "SET_UNITS_IMPERIAL" })
                  : dispatch({ type: "SET_UNITS_METRIC" })
              }
            >
              {renderBtn()}
            </Button>
            <DailyChart units={settings.units} hourly={data.hourly.data} />
            <ClothingDetails
              apparentTemperature={data.currently.apparentTemperature}
            />
          </Grid>
          <Grid align="center" item sm={12} xs={12}>
            <CollapseWeather>
              <Hourly units={settings.units} hourly={data.hourly} />
            </CollapseWeather>
          </Grid>
        </Grid>
      )}
    </WeatherContent>
  );
};

export default withStyles(styles)(CurrentWeather);
