import { createContext, useReducer } from "react";
import { counterReducer } from "../Reducers/counterReducer";

export const CounterContext = createContext();

export const CounterContextProvider = ({ children }) => {
  //Set an inital count value
  const initialCount = 0;

  const [counter, dispatch] = useReducer(
    counterReducer,
    initialCount
  );

  return (
    <CounterContext.Provider value={{ counter, dispatch }}>
      {children}
    </CounterContext.Provider>
  );
};
