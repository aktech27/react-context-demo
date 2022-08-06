import { useContext } from "react";
import { CounterContext } from "../../context/Providers/CounterContext";

const CounterReset = () => {
  const { dispatch } = useContext(CounterContext);

  const handleResetClick = () => {
    dispatch({ type: "RESET" });
  };

  return (
    <div>
      <h2>This is CounterReset Component</h2>
      <p>In this component Counter state can be reset to 0</p>
      <button onClick={handleResetClick}>Reset</button>
    </div>
  );
};

export default CounterReset;
