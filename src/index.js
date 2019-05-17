import React from "react";
import { Helmet } from "react-helmet";
import ReactDOM from "react-dom";

import App from "./containers/App";
import "./styles.css";
import { StateProvider } from "./contexts/StateProvider";
import reducer from "./reducers/mainReducer";

const initialState = {
  settings: {
    gender: true,
    units: "CA"
  },
  data: {
    isLoading: true,
    isError: false,
    currently: {},
    hourly: {},
    daily: {}
  }
};

ReactDOM.render(
  <StateProvider initialState={initialState} reducer={reducer}>
    <Helmet>
      <title>Run Weather</title>
      <meta
        name="description"
        content="A weather app that recommends what you should be wearing when you go for a run! 🏃‍♂️🏃‍♀️"
      />
    </Helmet>
    <App />
  </StateProvider>,
  document.getElementById("root")
);
