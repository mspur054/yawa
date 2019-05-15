import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Link as RouterLink } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";

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

class NavBar extends React.Component {
  state = {
    value: "/"
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        {/* <AppBar position="static"> */}
        <Tabs centered value={value} onChange={this.handleChange}>
          <Tab component={RouterLink} value="/" to="/" label="Today" />
          <Tab
            component={RouterLink}
            value="/tomorrow"
            to="/tomorrow"
            label="Tomorrow"
          />
          <Tab
            component={RouterLink}
            value="/week"
            to="/week"
            label="This Week"
          />
        </Tabs>
        {/* </AppBar> */}
      </div>
    );
  }
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(NavBar);
