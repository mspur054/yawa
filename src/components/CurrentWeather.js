import React, { useEffect, useState } from "react";
import darkSky from "../api/darkSky";
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
import { useGeolocation, useLocation } from "./Utils/react-utils";
import DailyChart from "./graph/DailyChart";
import { convertToF, formatAddress } from "../helpers";

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

  const [data, setData] = useState({ currently: {}, hourly: {} });
  const [siUnits, setUnits] = useState("si");
  const [isLoading, setIsLoading] = useState(false);

  const position = useGeolocation();
  const { address } = useLocation(position);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const result = await darkSky.get(
        `/45.4255,-75.6924?exclude=minutely,flags,daily&units=si`
      );

      setData(result.data);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  function renderBtn() {
    if (siUnits === "si") {
      return "Farenheit";
    } else {
      return "si";
    }
  }

  function renderTemp() {
    return `Feels like ${Math.floor(
      siUnits === "si"
        ? data.currently.apparentTemperature
        : convertToF(data.currently.apparentTemperature)
    )}°${siUnits === "si" ? "C" : "F"}`;
  }

  return (
    <WeatherContent>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <Grid container spacing={16}>
          <Grid align="left" item xs={12} sm={12}>
            <Typography variant="h6" align="left" gutterBottom>
              {address ? formatAddress(address) : null}
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
            <WeatherDetails data={data} siUnits={siUnits} />
          </Grid>
          <Grid item sm={12} xs={12}>
            <Button
              variant="contained"
              color="primary"
              className={classes.margin}
              onClick={() => setUnits(renderBtn())}
            >
              {renderBtn()}
            </Button>
            <DailyChart siUnits={siUnits} hourly={data.hourly.data} />
          </Grid>
          <Grid align="center" item sm={12} xs={12}>
            <CollapseWeather>
              <Hourly siUnits={siUnits} hourly={data.hourly} />
            </CollapseWeather>
          </Grid>
        </Grid>
      )}
    </WeatherContent>
  );
};

export default withStyles(styles)(CurrentWeather);
