import React from "react";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 3,
    textAlign: "center",
    color: theme.palette.text.secondary,
    marginTop: "100px"
  }
});

const WeatherContent = props => {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <div className={classes.paper}>{props.children}</div>
    </div>
  );
};

export default withStyles(styles)(WeatherContent);
