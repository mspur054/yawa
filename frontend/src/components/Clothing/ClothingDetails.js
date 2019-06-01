import React from "react";
import Typography from "@material-ui/core/Typography";
import Tooltip from '@material-ui/core/Tooltip';

const ClothingDetails = ({ apparentTemperature, ...other }) => {
  const clothingRecc = apparentTemperature => {
    //Decide on clothing based on weather
    if (apparentTemperature >= 15) {
      return ["Singlet", "Shorts"];
    } else if (6 <= apparentTemperature <= 14) {
      return ["Short Sleeve", "Shorts", "Long Sleeve", "Toque", "Tights"];
    } else if (1 <= apparentTemperature <= 5) {
      return ["Long Sleeve", "Shorts"];
    } else if (-4 <= apparentTemperature <= 0) {
      return ["Long Sleeve", "Tights"];
    } else if (-9 <= apparentTemperature <= -5) {
      return [ "Toque", "Jacket", "Long Sleeve", "Tights", "Gloves"];
    } else if (-19 <= apparentTemperature <= -10) {
      return ["Toque", "Buff", "Jacket", "Base Layer Top", "Tights", "Mittens"];
    } else if (apparentTemperature <= -20) {
      return [
        "Jacket",
        "Base Layer Top",
        "Long Sleeve",
        "Tights",
        "Mittens",
        "Toque",
        "Buff"
      ];
    }
  };

  const renderClothingIcon = clothingItem =>{
   return  <object
    {...other}
    alt="clothingItem"
    data={`/icons/Clothing/${clothingItem.replace(/\s/gi,"_")}.svg`}
    type="image/svg+xml"
  >
    <img {...other}   alt={clothingItem} src={`/icons/Clothing/${clothingItem.replace(/\s/gi,"_")}.jpg`} />
    </object>

  }

  return (
    <div>
      <Typography variant="h5" gutterBottom>Recommended Clothing</Typography>
      {clothingRecc(apparentTemperature).map(clothing => (
        <>
          <Tooltip key={clothing} title={clothing}>

          {renderClothingIcon(clothing)}
          {/* <object
            {...other}
            alt="singlet"
            data={`/icons/Clothing/Singlet.svg`}
            type="image/svg+xml"
          /> */}
          </Tooltip>
        </>
      ))}
    </div>
  );
};

export default ClothingDetails;
