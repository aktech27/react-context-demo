export const themeReducer = (state, action) => {
  if (action.type == "TOGGLE") {
    return state == "LIGHT" ? "DARK" : "LIGHT"; // Toggle between DARK and LIGHT state values
  }
  return state;
};
