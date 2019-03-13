import React from "react";
import Hourly from "./Hourly";

const WeatherCard = props => {
  const weekday = new Date(props.forecast.date).getDay();
  const iconClasses = "fas fa-";

  return (
    <div className="weatherCard" onClick={() => alert(1)}>
      <div className="weatherCardDate">
        {props.forecast.date} {weekday}
      </div>
      <i class="fas fa-cloud-sun" />
      <div className="hi">High: {props.forecast.high}</div>
      <div>Low: {props.forecast.low}</div>
      <Hourly visible={false} hourly={props.forecast.hourly} />
    </div>
  );
};
export default WeatherCard;
