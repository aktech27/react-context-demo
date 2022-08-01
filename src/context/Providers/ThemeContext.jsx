import { createContext, useEffect, useReducer } from "react";
import { themeReducer } from "../Reducers/themeReducer";

export const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
  //Set an Initial Theme
  const initialTheme = "LIGHT";

  //Initializing state using init method.
  //Check if theme is already present and set state accordingly
  const init = () => {
    //If Local Storage not present, go with initial theme
    return localStorage.getItem("theme")
      ? localStorage.getItem("theme")
      : initialTheme;
  };

  const [theme, dispatch] = useReducer(
    themeReducer,
    initialTheme,
    init
  );

  useEffect(() => {
    if (theme == "DARK")
      document.querySelector("body").classList.add("dark-theme");
    if (theme == "LIGHT")
      document.querySelector("body").classList.remove("dark-theme");

    //Saving the state to LocalStorage to persist data on reload
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
};
