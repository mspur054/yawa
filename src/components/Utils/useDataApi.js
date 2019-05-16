import { useState, useReducer, useEffect } from "react";
import darkSky from "../api/darkSky";
/**
 * Fetches data from dark sky if the position has been loaded.
 *
 */
export const useDataApi = initialPosition => {
  const [position, setPosition] = useState(initialPosition);
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const fetchData = async () => {
      if (!position.loading) {
        dispatch({ type: "FETCH_INIT" });
        try {
          const result = await darkSky.get(
            `/${position.latitude},${
              position.longitude
            }?exclude=minutely,flags,daily&units=si`
          );
          dispatch({ type: "FETCH_SUCCESS", payload: result.data });
        } catch (error) {
          dispatch({ type: "FETCH_FAILURE" });
        }
      }
    };
    fetchData();
  }, [position]);

  const doFetch = position => {
    setPosition(position);
  };

  return { ...state, doFetch };
};

const initialState = {
  isLoading: true,
  isError: false,
  currently: {},
  hourly: {},
  daily: {}
};

const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_INIT":
      return { ...state, isLoading: true, isError: false };
    case "FETCH_SUCCESS":
      return { ...state, isLoading: false, isError: false, ...action.payload };
    case "FETCH_FAILURE":
      return { ...state, isLoading: false, isError: true };
    default:
      throw new Error();
  }
};
