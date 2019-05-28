import React, { useState } from "react";
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { useStateValue } from "../contexts/StateProvider";

const Settings = props => {
  const [{ settings }, dispatch] = useStateValue();
  const { units } = settings;
  const [isOpen, setOpen] = useState(false);

  const handleUnitsChange = () => {
    settings.units === "METRIC"
      ? dispatch({ type: "SET_UNITS_IMPERIAL" })
      : dispatch({ type: "SET_UNITS_METRIC" });
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
