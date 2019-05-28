import React, { useState } from "react";
import Switch from "@material-ui/core/Switch";

const Settings = ({ settings }) => {
  const { units } = settings;
  const [isOpen, setOpen] = useState(false);

  const handleUnitsChange = () => {
    setOpen(!isOpen);
  };

  return (
    <Switch
      checked={units === "METRIC" ? true : false}
      onChange={handleUnitsChange}
      value={units}
      color="primary"
    />
  );
};

export default Settings;
