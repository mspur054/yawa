import React from "react";
import { withStyles } from "@material-ui/core/styles";

import Sidebar from "./Sidebar";

const styles = theme => ({
  root: {
    display: "flex"
  }
});

const AppFrame = props => {
  const { classes, children } = props;
  return (
    <div className={classes.root}>
      <Sidebar />
      {children}
    </div>
  );
};

export default withStyles(styles)(AppFrame);
