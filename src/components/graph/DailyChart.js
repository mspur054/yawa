import React from "react";
import PropTypes from "prop-types";
//import Chartist from "chartist";
import ChartistGraph from "react-chartist";
import { fromUnixTime, format } from "date-fns";

import { convertToF } from "../../helpers";

const DailyChart = ({ hourly, siUnits }) => {
  const labels = hourly
    ? Object.keys(hourly)
        .map(key => format(fromUnixTime(hourly[key].time), "ha"))
        .slice(0, 23)
    : null;

  const series = hourly
    ? Object.keys(hourly)
        .map(function(key) {
          return siUnits === "si"
            ? hourly[key].apparentTemperature
            : convertToF(hourly[key].apparentTemperature);
        })
        .slice(0, 23)
    : null;

  const data = {
    labels: labels,
    series: [series]
  };

  const options = {
    width: "100%",
    showPoint: false,
    fullWidth: true,
    axisX: {
      labelInterpolationFnc: function(value, index) {
        return index % 6 === 0 ? value : null;
      }
    }
  };

  const responsiveOptions = [
    [
      "screen and (min-width: 640px)",
      {
        showArea: true,
        axisX: {
          showGrid: false,
          labelInterpolationFnc: function(value, index) {
            return index % 4 === 0 ? value : null;
          }
        }
      }
    ]
  ];

  if (!hourly) {
    return <div>Loading</div>;
  }

  return (
    <ChartistGraph
      responsiveOptions={responsiveOptions}
      options={options}
      data={data}
      type={"Line"}
    />
  );
};

DailyChart.propTypes = {
  hourly: PropTypes.object
};

export default DailyChart;
