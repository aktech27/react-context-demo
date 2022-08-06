import { useContext } from "react";
import { CounterContext } from "../../context/Providers/CounterContext";
import CounterCustom from "./CounterCustom";
import CounterOne from "./CounterOne";
import CounterReset from "./CounterReset";
import styles from "./Counter.module.css";

const Counter = () => {
  const { counter } = useContext(CounterContext);
  return (
    <div className={styles.container}>
      <h1>Counter Component</h1>
      <p>
        Unlike Auth and Theme Context, the below Context(Counter) does
        not persist data on reload. It simply shows how state is
        managed within all components
      </p>
      <p>
        The value for counter comes from counter state from Counter
        Context
      </p>
      <div className={`flex-cc ${styles.counter}`}>{counter}</div>
      <p>
        This counter value can be modified by the below three
        components
      </p>
      <div className={`flex-cc ${styles.wrapper}`}>
        <CounterOne />
        <CounterCustom />
        <CounterReset />
      </div>
    </div>
  );
};

export default Counter;
