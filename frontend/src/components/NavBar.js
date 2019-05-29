import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { Link as RouterLink, withRouter } from "react-router-dom";
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

  componentDidMount() {
    this.setState({ value: this.props.location.pathname });
  }

  render() {
    const { classes } = this.props;
    const { value } = this.state;
    console.log(this.props);
    return (
      <div className={classes.root}>
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
            value="/7days"
            to="/7days"
            label="7 Days"
          />
        </Tabs>
      </div>
    );
  }
}

NavBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withRouter(withStyles(styles)(NavBar));
