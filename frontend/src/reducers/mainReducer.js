import fetchDataReducer from "./fetchDataReducer";
import settingsReducer from "./settingsReducer";
import locationReducer from "./locationReducer";

const mainReducer = ({ data, settings, location }, action) => ({
  data: fetchDataReducer(data, action),
  settings: settingsReducer(settings, action),
  location: locationReducer(location, action)
});

export default mainReducer;
