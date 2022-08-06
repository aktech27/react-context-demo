import { useContext } from "react";
import { CounterContext } from "../../context/Providers/CounterContext";
import styles from "./Counter.module.css";

const CounterOne = () => {
  const { dispatch } = useContext(CounterContext);

  const handleAddClick = () => {
    dispatch({ type: "ADD_ONE" });
  };

  const handleMinusClick = () => {
    dispatch({ type: "MINUS_ONE" });
  };

  return (
    <div className={styles.card}>
      <h2>CounterOne Component</h2>
      <p>
        In this component Counter state can be incremented or
        decrement by one
      </p>
      <div className={styles.buttonContainer}>
        <button onClick={handleAddClick}>Add 1</button>
        <button onClick={handleMinusClick}>Minus 1</button>
      </div>
    </div>
  );
};

export default CounterOne;
