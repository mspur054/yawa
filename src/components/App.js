import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import NavBar from "./NavBar";
import Tomorrow from "./Tomorrow";

import CurrentWeather from "./CurrentWeather";

const App = props => {
  return (
    <Router>
      <React.Fragment>
        <NavBar />
        <Switch>
          <Route exact path="/" component={CurrentWeather} />
          <Route exact path="/tomorrow" component={Tomorrow} />
          <Route exact path="/thisweek" />
        </Switch>
      </React.Fragment>
    </Router>
  );
};
export default App;
