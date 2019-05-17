import fetchDataReducer from "./fetchDataReducer";
import settingsReducer from "./settingsReducer";

const mainReducer = ({ data, settings }, action) => ({
  data: fetchDataReducer(data, action),
  settings: settingsReducer(settings, action)
});

export default mainReducer;
