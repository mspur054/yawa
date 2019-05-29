import React from "react";
import { fromUnixTime, format } from "date-fns";
import Typography from "@material-ui/core/Typography";

const WeatherDate = ({ time, dateFormat, ...other }) => {
  const dt = !time ? null : format(fromUnixTime(time), dateFormat);

  return (
    <Typography {...other} component="span">
      {dt}
    </Typography>
  );
};

export default WeatherDate;
