import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

import Tomorrow from "./Tomorrow";
import AppFrame from "./AppFrame";

import CurrentWeather from "./CurrentWeather";

const App = props => {
  return (
    <Router>
      <React.Fragment>
        <AppFrame>
          <Switch>
            <Route exact path="/" component={CurrentWeather} />
            <Route exact path="/tomorrow" component={Tomorrow} />
            <Route exact path="/thisweek" />
          </Switch>
        </AppFrame>
      </React.Fragment>
    </Router>
  );
};
export default App;
