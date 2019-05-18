const reducer = (state, action) => {
  switch (action.type) {
    case "FETCH_LOCATION_INIT":
      return { ...state, isLoading: true, isError: false };
    case "FETCH_LOCATION_SUCCESS":
      return { ...state, isLoading: false, isError: false, ...action.payload };
    case "FETCH_LOCATION_FAILURE":
      return { ...state, isLoading: false, isError: true };
    default:
      return state;
  }
};

export default reducer;
