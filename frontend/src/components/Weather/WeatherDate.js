import React from "react";
import { fromUnixTime, format } from "date-fns";
import Typography from "@material-ui/core/Typography";

const WeatherDate = props => {
  const { time, dateFormat } = props;
  const dt = !time ? null : format(fromUnixTime(time), dateFormat);

  return <Typography component="span">{dt}</Typography>;
};

export default WeatherDate;
