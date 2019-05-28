import React, { useState } from "react";
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";

const Settings = ({ settings }) => {
  const { units } = settings;
  const [isOpen, setOpen] = useState(false);

  const handleUnitsChange = () => {
    console.log("clicked");
    setOpen(!isOpen);
  };

  return (
    <FormControlLabel
      control={
        <Switch
          checked={units === "METRIC" ? true : false}
          onChange={handleUnitsChange}
          value={units}
          color="primary"
        />
      }
      label={units}
    />
  );
};

export default Settings;
