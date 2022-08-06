import { useContext } from "react";
import { CounterContext } from "../../context/Providers/CounterContext";
import styles from "./Counter.module.css";

const CounterReset = () => {
  const { dispatch } = useContext(CounterContext);

  const handleResetClick = () => {
    dispatch({ type: "RESET" });
  };

  return (
    <div className={styles.card}>
      <h2>CounterReset Component</h2>
      <p>In this component Counter state can be reset to 0</p>
      <button className={styles.reset} onClick={handleResetClick}>
        Reset
      </button>
    </div>
  );
};

export default CounterReset;
