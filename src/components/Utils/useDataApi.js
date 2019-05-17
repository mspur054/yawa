import { useState, useReducer, useEffect } from "react";
import darkSky from "../../api/darkSky";
import fetchDataReducer from "../../reducers/fetchDataReducer";
/**
 * Fetches data from dark sky if the position has been loaded.
 *
 */
export const useDataApi = initialPosition => {
  const [position, setPosition] = useState(initialPosition);
  const [state, dispatch] = useReducer(fetchDataReducer, initialState);

  useEffect(() => {
    const fetchData = async () => {
      if (!position.loading) {
        //only try fetch if position is not loading
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
