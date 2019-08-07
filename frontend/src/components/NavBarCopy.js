import React, { useState } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Link as RouterLink, withRouter } from "react-router-dom";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import { useStateValue } from "../contexts/StateProvider";

import WeatherFlag from "./WeatherFlag";

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 1 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired
};

const styles = theme => ({
  root: {
    flexGrow: 1
  }
});

const NavBarCopy = props => {
  const [state, setState] = useState({ value: "/" });
  const [
    {
      data: { alerts, isLoading }
    }
  ] = useStateValue();

  const { classes } = props;

  function handleChange(event, value) {
    setState({ value });
  }

  return (
    <div className={classes.root}>
      <Tabs centered value={state.value} onChange={handleChange}>
        <Tab component={RouterLink} value="/" to="/" label="Today" />
        <Tab
          component={RouterLink}
          value="/tomorrow"
          to="/tomorrow"
          label="Tomorrow"
        />
        <Tab component={RouterLink} value="/7days" to="/7days" label="7 Days" />
      </Tabs>
      {!isLoading ? <WeatherFlag alerts={alerts[0]} /> : null}
    </div>
  );
};

NavBarCopy.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withRouter(withStyles(styles)(NavBarCopy));
