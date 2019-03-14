import React from "react";

const Hourly = props => {
  const hourData = props.hourly.map(hour => {
    return <li key={hour.hour}>{hour.temp}</li>;
  });
  const timeData = props.hourly.map(hour => {
    return <li key={hour.hour}>{hour.hour}</li>;
  });
  return (
    <div>
      <ul className="hoursContainer">{hourData}</ul>
    </div>
  );
};

export default Hourly;
