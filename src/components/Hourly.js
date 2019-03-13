import React from "react";

const Hourly = props => {
  const hourData = props.hourly.map(hour => {
    return <li>{hour.hour}</li>;
  });
  return (
    <div>
      <ul>{hourData}</ul>
    </div>
  );
};

export default Hourly;
