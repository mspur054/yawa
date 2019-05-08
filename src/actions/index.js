import darkSky from "../api/darkSky";

export const fetchForecast = ({ latitude, longitude }) => async dispatch => {
  const response = await darkSky.get(`/${latitude},${longitude}`);
};
