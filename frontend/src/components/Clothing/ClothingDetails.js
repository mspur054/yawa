import React from "react";

const ClothingDetails = ({ apparentTemperature }) => {
  const clothingRecc = apparentTemperature => {
    if (apparentTemperature >= 15) {
      return ["Singlet", "Shorts"];
    } else if (5 < apparentTemperature < 15) {
      return ["Short sleeve", "Shorts"];
    } else if (0 < apparentTemperature <= 5) {
      return ["Long sleeve", "Shorts"];
    } else if (-5 < apparentTemperature <= 0) {
      return ["Long sleeve", "Tights"];
    } else if (-10 < apparentTemperature <= -5) {
      return ["Jacket", "Long sleeve", "Tights", "Gloves", "Toque"];
    } else if (-20 < apparentTemperature <= -10) {
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
      <h5>Recommended Clothing</h5>
      {clothingRecc(apparentTemperature).map(clothing => (
        <p>{clothing}</p>
      ))}
    </div>
  );
};

export default ClothingDetails;
