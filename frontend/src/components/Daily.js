import React from "react";
import Grid from "@material-ui/core/Grid";

import Typography from "@material-ui/core/Typography";
import { convertToF, formatAddress } from "../helpers";

import WeatherContent from "./WeatherContent";
import { useStateValue } from "../contexts/StateProvider";

const Daily = props => {
  const [{ data, settings, location }, dispatch] = useStateValue();

  return (
    <WeatherContent>
      {data.isLoading ? (
        <div>Loading...</div>
      ) : (
        <Grid container spacing={16}>
          <Typography variant="h6" align="left" gutterBottom>
            {!location.isLoading ? formatAddress(location.address) : null}
          </Typography>
        </Grid>
      )}
    </WeatherContent>
  );
};

export default Daily;
