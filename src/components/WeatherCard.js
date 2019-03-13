import React from "react";

const WeatherCard = props => {
  const weekday = new Date(props.forecast.date).getDay();
  // const iconClasses = "fas fa-";
  // const [hoursVisible, setHoursVisible] = useState(false);

  return (
    <div
      className="weatherCard"
      onClick={() => props.displayHourly(props.forecast.hourly)}
    >
      <div className="weatherCardDate">
        {props.forecast.date} {weekday}
      </div>
      <i className="fas fa-cloud-sun" />
      <div className="hi">High: {props.forecast.high}</div>
      <div>Low: {props.forecast.low}</div>
    </div>
  );
};
export default WeatherCard;
