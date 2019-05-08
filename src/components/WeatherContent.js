import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: "center",
    color: theme.palette.text.secondary,

    margin: "auto"
  }
});

const WeatherContent = props => {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>{props.children}</Paper>
    </div>
  );
};

export default withStyles(styles)(WeatherContent);
