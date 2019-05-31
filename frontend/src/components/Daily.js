import React from "react";
import Grid from "@material-ui/core/Grid";
import DailyList from "./DailyList";
import { useStateValue } from "../contexts/StateProvider";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: "100px",
    width: "100%"
  }
});

const Daily = props => {
  const [{ data, settings }] = useStateValue();
  const { classes } = props;
  return (
    <div className={classes.root}>
      {data.isLoading ? (
        <div>Loading...</div>
      ) : (
        <Grid container>
          <Grid item xs={12}>
            <DailyList settings={settings} daily={data.daily} />
          </Grid>
        </Grid>
      )}
    </div>
  );
};

export default withStyles(styles)(Daily);
