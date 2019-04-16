import React from "react";
import fetchForecast from "../actions/index";

class App extends React.Component {
  state = {
    coords: {}
  };
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(position => {
      console.log(position.coords);
      this.setState({ coords: position.coords });
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Weather</h1>This is the app
      </div>
    );
  }
}
export default App;
