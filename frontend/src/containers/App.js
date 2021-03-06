import React, { useEffect } from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";

import Tomorrow from "../components/Tomorrow";
import Daily from "../components/Daily";
import AppFrame from "./AppFrame";
import CurrentWeather from "../components/CurrentWeather";
import { useDataApi } from "../components/Utils/useDataApi";
import { useGeolocation, useLocation } from "../components/Utils/react-utils";

const App = props => {
  const position = useGeolocation();
  const weatherData = useDataApi(position);
  const locationData = useLocation(position);

  useEffect(() => {
    if (!position.loading) {
      weatherData.doFetch(position);
      locationData.doFetch(position);
    }
  }, [position.loading]);
  //TODO: ADD NO MATCH ROUTE
  return (
    <Router>
      <React.Fragment>
        <AppFrame>
          <Switch>
            <Route exact path="/" component={CurrentWeather} />
            <Route exact path="/tomorrow" component={Tomorrow} />
            <Route exact path="/7days" component={Daily} />
          </Switch>
        </AppFrame>
      </React.Fragment>
    </Router>
  );
};
export default App;
