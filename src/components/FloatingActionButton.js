import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/core/Icon";
import Tooltip from "@material-ui/core/Tooltip";
import Fab from "@material-ui/core/Fab";

const styleSheet = theme => ({
  button: {
    margin: theme.spacing.unit,
    marginLeft: "auto",
    display: "block"
  }
});

function FloatingActionButtons(props) {
  const classes = props.classes;
  return (
    <div>
      <Tooltip title="Add" aria-label="Add">
        <Fab color="primary" className={classes.button}>
          <AddIcon>+</AddIcon>
        </Fab>
      </Tooltip>
    </div>
  );
}

FloatingActionButtons.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styleSheet)(FloatingActionButtons);
