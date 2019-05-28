import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import Typography from "@material-ui/core/Typography";

import Settings from "./Settings";
import { withStyles } from "@material-ui/core/styles";
const styles = theme => ({
  toolbar: theme.mixins.toolbar
});

const SettingsDrawer = ({ settings, classes }) => {
  return (
    <div>
      <div className={classes.toolbar}>
        <Typography align="center" variant="h5">
          Settings
        </Typography>
      </div>
      <Divider />
      <List>
        <ListItem>
          <ListItemText>Units</ListItemText>
          <Settings />
        </ListItem>
      </List>
      <Divider />
    </div>
  );
};

export default withStyles(styles, { withTheme: true })(SettingsDrawer);
