import { useContext, useState } from "react";
import { CounterContext } from "../../context/Providers/CounterContext";

const CounterCustom = () => {
  const { dispatch } = useContext(CounterContext);

  const [value, setValue] = useState(0);

  const handleAddClick = () => {
    dispatch({ type: "ADD_CUSTOM", payload: parseInt(value) });
    setValue(0);
  };

  const handleMinusClick = () => {
    dispatch({ type: "ADD_CUSTOM", payload: parseInt(value) * -1 });
    setValue(0);
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <h2>This is CounterCustom Component</h2>
      <p>
        In this component Counter state can be incremented or
        decrement by input value
      </p>
      <label htmlFor="count">Enter value : </label>
      <input
        id="count"
        type="number"
        value={value}
        onChange={handleChange}
      />
      <button onClick={handleAddClick}>Add value</button>
      <button onClick={handleMinusClick}>Minus value</button>
    </div>
  );
};

export default CounterCustom;
