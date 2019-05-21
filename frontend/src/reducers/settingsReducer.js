const reducer = (state, action) => {
  switch (action.type) {
    case "SET_GENDER_MALE":
      return { ...state, gender: "MALE" };
    case "SET_GENDER_FEMALE":
      return { ...state, gender: "FEMALE" };
    case "SET_UNITS_METRIC":
      return { ...state, units: "METRIC" };
    case "SET_UNITS_IMPERIAL":
      return { ...state, units: "IMPERIAL" };
    default:
      return state;
  }
};

export default reducer;
