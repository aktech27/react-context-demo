export const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      let user = {
        email: action.payload.email,
        name: action.payload.name,
      };

      //Saving the state to LocalStorage to persist data on reload
      localStorage.setItem("user", JSON.stringify(user));
      return user;

    case "LOGOUT":
      localStorage.removeItem("user");
      return null;

    default:
      return state;
  }
};
