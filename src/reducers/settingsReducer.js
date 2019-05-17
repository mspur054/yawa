const reducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_GENDER":
      return { ...state, gender: !state.gender };
    case "CHANGE_UNITS":
      return { ...state, units: action.units };
    default:
      return state;
  }
};

export default reducer;
