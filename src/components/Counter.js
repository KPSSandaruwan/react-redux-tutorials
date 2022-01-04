import { useSelector, useDispatch } from "react-redux";
import classes from "./Counter.module.css";
import { counterActions } from "../store";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);
  const showCounter = useSelector((state) => state.showCounter)

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };

  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  const increaseHandler = () => {
    dispatch(counterActions.increase(5))
  }

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter())
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <div className={classes.button}>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increased by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
