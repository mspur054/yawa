import React, { useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Collapse from "@material-ui/core/Collapse";
import classnames from "classnames";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  }
});

const CollapseWeather = props => {
  const [expanded, setExpanded] = useState(false);
  const { classes } = props;

  function handleExpandClick() {
    setExpanded(!expanded);
  }

  return (
    <div className={classes.root}>
      <IconButton
        className={classnames(classes.expand, {
          [classes.expandOpen]: expanded
        })}
        aria-expanded={expanded}
        aria-label="Hourly"
        onClick={() => handleExpandClick()}
      >
        <ExpandMoreIcon />
      </IconButton>
      <Collapse in={expanded} unmountOnExit>
        {props.children}
      </Collapse>
    </div>
  );
};

export default withStyles(styles)(CollapseWeather);
