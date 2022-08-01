import { createContext, useReducer } from "react";
import { authReducer } from "../Reducers/authReducer";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  //Set an Initial null value for user
  const initialUser = null;

  //Initializing state using init method.
  //Check if user is already logged in and set state accordingly
  const init = () => {
    //If Local Storage not present, go with initial user(null)
    return localStorage.getItem("user")
      ? JSON.parse(localStorage.getItem("user"))
      : initialUser;
  };

  const [user, dispatch] = useReducer(authReducer, initialUser, init);

  return (
    <AuthContext.Provider value={{ user, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
