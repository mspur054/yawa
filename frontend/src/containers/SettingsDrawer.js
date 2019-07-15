import React, { useState } from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import SearchIcon from "@material-ui/icons/Search";
import Typography from "@material-ui/core/Typography";
import SearchBar from "../components/Search/SearchBar";
import ResultList from "../components/Search/ResultList";

import Settings from "./Settings";
import { withStyles } from "@material-ui/core/styles";
const styles = theme => ({
  toolbar: theme.mixins.toolbar
});

const SettingsDrawer = ({ settings, classes }) => {
  const [query, setQuery] = useState("");
  function handleChange(value) {
    console.log(process.env.REACT_GOOGLE_PLACES_API);
    setQuery(value.currentTarget.value);
  }
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
          <ListItemIcon>
            <SearchIcon />
            <SearchBar query={query} handleChange={handleChange} />
          </ListItemIcon>
        </ListItem>
        <ListItem>
          <ListItemText>Units</ListItemText>
          <Settings />
        </ListItem>
      </List>
      <ResultList query={query} />
      <Divider />
    </div>
  );
};

export default withStyles(styles, { withTheme: true })(SettingsDrawer);
