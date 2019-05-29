import React from "react";
import Grid from "@material-ui/core/Grid";

import Typography from "@material-ui/core/Typography";
import { convertToF, formatAddress } from "../helpers";

import DailyList from "./DailyList";
import WeatherContent from "./WeatherContent";
import { useStateValue } from "../contexts/StateProvider";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    flexGrow: 1
  }
});

const Daily = props => {
  const [{ data, settings, location }, dispatch] = useStateValue();
  const { classes } = props;
  return (
    <WeatherContent className={classes.root}>
      {data.isLoading ? (
        <div>Loading...</div>
      ) : (
        <Grid container>
          <Grid item xs={12}>
            <Typography variant="h6" align="left" gutterBottom>
              {!location.isLoading ? formatAddress(location.address) : null}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <DailyList settings={settings} daily={data.daily} />
          </Grid>
        </Grid>
      )}
    </WeatherContent>
  );
};

export default withStyles(styles)(Daily);
