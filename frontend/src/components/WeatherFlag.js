import React from "react";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";

const styles = theme => ({
  root: {
    width: "100%"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular
  }
});

const WeatherFlag = ({ alerts, ...props }) => {
  const { classes } = props;
  const { description, severity, time, expires, title, url } = alerts;
  console.log(alerts.alerts);
  return (
    <div className={classes.root} style={{ backgroundColor: "#e22b2ed6" }}>
      <ExpansionPanel style={{ backgroundColor: "#e22b2ed6" }}>
        <ExpansionPanelSummary>
          <Typography align="center" color="inherit">
            {title}
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography color="inherit">{description}</Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
};

export default withStyles(styles)(WeatherFlag);
