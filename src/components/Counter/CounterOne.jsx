import { useContext } from "react";
import { CounterContext } from "../../context/Providers/CounterContext";

const CounterOne = () => {
  const { dispatch } = useContext(CounterContext);

  const handleAddClick = () => {
    dispatch({ type: "ADD_ONE" });
  };

  const handleMinusClick = () => {
    dispatch({ type: "MINUS_ONE" });
  };

  return (
    <div>
      <h2>This is CounterOne Component</h2>
      <p>
        In this component Counter state can be incremented or
        decrement by one
      </p>
      <button onClick={handleAddClick}>Add 1</button>
      <button onClick={handleMinusClick}>Minus 1</button>
    </div>
  );
};

export default CounterOne;
