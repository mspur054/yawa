import React from "react";
import { Helmet } from "react-helmet";
import ReactDOM from "react-dom";

import App from "./components/App";
import "./styles.css";

ReactDOM.render(
  <>
    <Helmet>
      <title>Run Weather</title>
      <meta
        name="description"
        content="A weather app that recommends what you should be wearing when you go for a run! 🏃‍♂️🏃‍♀️"
      />
    </Helmet>
    <App />
  </>,
  document.getElementById("root")
);
