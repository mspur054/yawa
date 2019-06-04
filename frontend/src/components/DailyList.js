import React from "react";
import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import WeatherDate from "./Weather/WeatherDate";
import Divider from "@material-ui/core/Divider";
import WeatherIcon from "./Weather/WeatherIcon";
import { convertToF } from "../helpers";

import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    width: "100%",
    margin: "auto",
    padding: "0 !important"
  },
  panel: {
    margin: "auto"
  },
  panelSummary: {
    paddingRight: 5 //TODO: Figure out why when I zero this out the width becomes more than 100% and horizontal scroll bar appears
  }
});

const DailyList = ({ daily, settings, classes }) => {
  const { units } = settings;

  const renderDaily = data => {
    return data.map(day => (
      <React.Fragment key={day.time}>
        <ExpansionPanel className={classes.root}>
          <ExpansionPanelSummary className={classes.panelSummary}>
            <Grid
              justify={"flex-start"}
              alignItems={"center"}
              container
              spacing={8}
            >
              <Grid item xs={8}>
                <WeatherDate
                  fontWeight="fontWeightMedium"
                  color={"textPrimary"}
                  align={"left"}
                  time={day.time}
                  dateFormat={"eeee, MMM d"}
                />
                <Typography align={"left"} color={"textSecondary"}>
                  {day.summary}
                </Typography>
              </Grid>
              <Grid item xs={2}>
                <WeatherIcon style={{ height: "75px" }} icon={day.icon} />
              </Grid>
              <Grid
                container
                alignItems={"flex-end"}
                direction={"column"}
                item
                xs={2}
              >
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
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Grid container spacing={8}>
              <Grid item xs={6}>
                <Typography>Dew Point</Typography>
                <Typography>Humidity</Typography>
                <Typography>Chance of rain</Typography>
                <Typography>Wind</Typography>
              </Grid>
              <Grid item xs={6}>
                {/* TODO: Figure out how to clean this up */}
                <Typography color={"textSecondary"}>{day.dewPoint}</Typography>
                <Typography color={"textSecondary"}>{`${Math.round(
                  day.humidity * 100
                )}%`}</Typography>
                <Typography color={"textSecondary"}>{`${Math.round(
                  day.precipProbability
                )}%`}</Typography>
                <Typography color={"textSecondary"}>Wind</Typography>
              </Grid>
            </Grid>
          </ExpansionPanelDetails>
        </ExpansionPanel>
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

export default withStyles(styles)(DailyList);
