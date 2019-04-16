import * as TYPES from "../actions/types";

export default (state = { loading: true }, action) => {
  switch (action.type) {
    case TYPES.FETCH_FORECAST:
      return { ...state, ...action.payload };
    case TYPES.FETCH_FORECAST_LOADING:
      return { ...state, loading: true };
    case TYPES.FETCH_FORECAST_FINISHED: {
      return { ...state, loading: false };
    }
  }
};
