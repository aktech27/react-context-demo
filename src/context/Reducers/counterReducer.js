export const counterReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ONE":
      return state + 1;

    case "MINUS_ONE":
      return state - 1;

    case "ADD_CUSTOM":
      return state + action.payload;

    case "RESET":
      return 0;

    default:
      return state;
  }
};
