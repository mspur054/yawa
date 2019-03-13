import React, { useState } from "react";
import WeatherCardList from "./WeatherCardList";

const App = () => {
  const [forecasts, setForecasts] = useState([
    {
      date: "January 1, 2019",
      high: 5,
      low: -2,
      outlook: "sunny",
      hourly: [
        { hour: 1, temp: 5 },
        { hour: 2, temp: 5 },
        { hour: 3, temp: 5 },
        { hour: 4, temp: 5 }
      ]
    },
    { date: "January 2, 2019", high: 6, low: -7, outlook: "sunny", hourly: [] },
    { date: "January 3, 2019", high: 6, low: -7, outlook: "sunny", hourly: [] },
    { date: "January 4, 2019", high: 6, low: -7, outlook: "sunny", hourly: [] },
    { date: "January 5, 2019", high: 6, low: -7, outlook: "sunny", hourly: [] },
    { date: "January 6, 2019", high: 6, low: -7, outlook: "sunny", hourly: [] },
    { date: "January 7, 2019", high: 6, low: -7, outlook: "sunny", hourly: [] }
  ]);
  return (
    <div className="App">
      <h1>Weather</h1>This is the app
      <WeatherCardList forecasts={forecasts} />
    </div>
  );
};
export default App;
