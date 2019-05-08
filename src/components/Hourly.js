import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

import ListItemIcon from "@material-ui/core/ListItemIcon";

import WeatherIcon from "./Weather/WeatherIcon";
import Typography from "@material-ui/core/Typography";
import WeatherDate from "./Weather/WeatherDate";

import { convertToF } from "../helpers";

const styles = theme => ({
  root: {
    width: "100%",
    maxWidth: 600,
    backgroundColor: theme.palette.background.paper
  },
  inline: {
    display: "inline"
  }
});

function Hourly(props) {
  const { classes, siUnits } = props;

  function renderHourly({ hourly, siUnits }) {
    if (!hourly.data) {
      return;
    }

    function renderTemp(temp) {
      if (!temp) {
        return;
      }
      return `${Math.floor(siUnits === "si" ? temp : convertToF(temp))}°${
        siUnits === "si" ? "C" : "F"
      }`;
    }

    return hourly.data
      .map(hour => {
        return (
          <React.Fragment key={hour.time}>
            <ListItem alignItems="flex-start">
              <ListItemIcon>
                <WeatherIcon icon={hour.icon} />
              </ListItemIcon>
              <ListItemText
                primary={`Feels like ${renderTemp(hour.apparentTemperature)}`}
                secondary={
                  <>
                    <WeatherDate time={hour.time} dateFormat="ha" />
                    <Typography component="span">{hour.summary}</Typography>
                  </>
                }
              />
            </ListItem>
          </React.Fragment>
        );
      })
      .slice(23); //only 24 hours ahead
  }

  return <List className={classes.root}>{renderHourly(props)}</List>;
}

Hourly.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Hourly);
