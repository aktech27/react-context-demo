import { useContext } from "react";
import { CounterContext } from "../../context/Providers/CounterContext";
import CounterCustom from "./CounterCustom";
import CounterOne from "./CounterOne";
import CounterReset from "./CounterReset";

const About = () => {
  const { counter } = useContext(CounterContext);
  return (
    <div>
      <h1>Context API - Demo</h1>
      <p>
        This is a simple demonstration of using Context API with
        useReducer() hook.
      </p>
      <p>
        This also shows how to persist state data on page reload or
        entire app reload, by using Local Storage.
      </p>
      <p>
        Persisting data is done only in two context namely : Auth and
        Theme
      </p>
      <p>
        The below Context(Counter) does not persist data on reload. It
        simply shows how state is managed within all components
      </p>
      <h1>Counter : {counter}</h1>
      <CounterOne />
      <br />
      <CounterCustom />
      <br />
      <CounterReset />
    </div>
  );
};

export default About;
