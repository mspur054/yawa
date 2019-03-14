import React from "react";
import WeatherCardList from "./WeatherCardList";
import Hourly from "./Hourly";

class App extends React.Component {
  state = {
    current: [],
    forecasts: [
      {
        date: "January 1, 2019",
        high: 5,
        low: -2,
        outlook: "sunny",
        hourly: [
          { hour: 1, temp: 5 },
          { hour: 2, temp: 5 },
          { hour: 3, temp: 5 },
          { hour: 4, temp: 5 },
          { hour: 5, temp: 5 },
          { hour: 6, temp: 1 },
          { hour: 7, temp: 0 },
          { hour: 8, temp: -1 },
          { hour: 4, temp: -2 }
        ]
      },
      {
        date: "January 2, 2019",
        high: 6,
        low: -7,
        outlook: "sunny",
        hourly: [
          { hour: 1, temp: -7 },
          { hour: 2, temp: -2 },
          { hour: 3, temp: 0 },
          { hour: 4, temp: 6 }
        ]
      },
      {
        date: "January 3, 2019",
        high: 6,
        low: -7,
        outlook: "sunny",
        hourly: [
          { hour: 1, temp: -7 },
          { hour: 2, temp: -2 },
          { hour: 3, temp: 0 },
          { hour: 4, temp: 6 }
        ]
      },
      {
        date: "January 4, 2019",
        high: 6,
        low: -7,
        outlook: "sunny",
        hourly: [
          { hour: 1, temp: -7 },
          { hour: 2, temp: -2 },
          { hour: 3, temp: 0 },
          { hour: 4, temp: 7 }
        ]
      },
      {
        date: "January 5, 2019",
        high: 6,
        low: -7,
        outlook: "sunny",
        hourly: [
          { hour: 1, temp: -7 },
          { hour: 2, temp: -2 },
          { hour: 3, temp: 0 },
          { hour: 4, temp: 8 }
        ]
      },
      {
        date: "January 6, 2019",
        high: 6,
        low: -7,
        outlook: "sunny",
        hourly: [
          { hour: 1, temp: -7 },
          { hour: 2, temp: -2 },
          { hour: 3, temp: 0 },
          { hour: 4, temp: 9 }
        ]
      },
      {
        date: "January 7, 2019",
        high: 6,
        low: -7,
        outlook: "sunny",
        hourly: [
          { hour: 1, temp: -7 },
          { hour: 2, temp: -2 },
          { hour: 3, temp: 0 },
          { hour: 4, temp: 10 }
        ]
      }
    ]
  };

  displayHourly = key => {
    // const forecast = this.state.forecasts.find(e => e.date === key);
    /// console.log(1111);
    let current = this.state.current;
    JSON.stringify(key) === JSON.stringify(current)
      ? (current = [])
      : (current = key);
    this.setState({ current });
  };

  render() {
    return (
      <div className="App">
        <h1>Weather</h1>This is the app
        <WeatherCardList
          forecasts={this.state.forecasts}
          displayHourly={this.displayHourly}
        />
        <Hourly hourly={this.state.current} />
      </div>
    );
  }
}
export default App;
