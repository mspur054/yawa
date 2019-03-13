import React, { useState } from "react";

const Hourly = props => {
  const hourData = props.hourly.map(hour => {
    return <li>{hour.hour}</li>;
  });
  return props.visible ? (
    <div>
      <ul>{hourData}</ul>
    </div>
  ) : null;
};

export default Hourly;
