import React from "react";
import PropTypes from "prop-types";
import ChartistGraph from "react-chartist";
import { fromUnixTime, format } from "date-fns";

const DailyChart = ({ hourly }) => {
  const labels = hourly
    ? Object.keys(hourly).map(key =>
        format(fromUnixTime(hourly[key].time), "ha")
      )
    : null;
  const series = hourly
    ? Object.keys(hourly).map(key => hourly[key].apparentTemperature)
    : null;

  const data = {
    labels: labels,
    series: [series]
  };

  console.log(data);

  const options = {
    high: 20,
    low: 0,
    axisX: {
      labelInterpolationFnc: function(value, index) {
        return index % 3 === 0 ? value : null;
      }
    }
  };

  if (!hourly) {
    return <div>Loading</div>;
  }

  return <ChartistGraph options={options} data={data} type={"Line"} />;
};

DailyChart.propTypes = {
  hourly: PropTypes.object
};

export default DailyChart;
