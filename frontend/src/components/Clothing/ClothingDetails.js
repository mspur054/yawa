import React from "react";
import Typography from "@material-ui/core/Typography";

const ClothingDetails = ({ apparentTemperature }) => {
  const clothingRecc = apparentTemperature => {
    if (apparentTemperature >= 15) {
      return ["Singlet", "Shorts"];
    } else if (6 <= apparentTemperature <= 14) {
      return ["Short sleeve", "Shorts"];
    } else if (1 <= apparentTemperature <= 5) {
      return ["Long sleeve", "Shorts"];
    } else if (-4 <= apparentTemperature <= 0) {
      return ["Long sleeve", "Tights"];
    } else if (-9 <= apparentTemperature <= -5) {
      return ["Jacket", "Long sleeve", "Tights", "Gloves", "Toque"];
    } else if (-19 <= apparentTemperature <= -10) {
      return ["Jacket", "Base Layer Top", "Tights", "Mittens", "Toque", "Buff"];
    } else if (apparentTemperature <= -20) {
      return [
        "Jacket",
        "Base Layer Top",
        "Long sleeve",
        "Tights",
        "Mittens",
        "Toque",
        "Buff"
      ];
    }
  };

  return (
    <div>
      <Typography variant="h5">Recommended Clothing</Typography>
      {clothingRecc(apparentTemperature).map(clothing => (
        <p key={clothing}>{clothing}</p>
      ))}
    </div>
  );
};

export default ClothingDetails;
