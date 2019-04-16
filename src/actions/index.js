import darkSky from "../apis/darkSky";

export const fetchForecast = ({ latitude, longitude }) => async dispatch => {
  const response = await darkSky.get(`/${latitude},${longitude}`);
};
