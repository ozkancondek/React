import { useDispatch, useSelector } from "react-redux";
import { increase } from "../../redux/actions/counterActions";
import "./Counter.css";

const Counter = () => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="app">
      <h2 className="counter-header">Counter With Redux</h2>
      <h1>{counter}</h1>
      <div>
        <button
          /*  onClick={() => dispatch({ type: "INCREMENT" })} */
          onClick={() => dispatch(increase())}
          className="counter-button positive"
        >
          incease
        </button>
        <button
          onClick={() => dispatch({ type: "RESET" })}
          className="counter-button zero"
        >
          reset
        </button>
        <button
          onClick={() => dispatch({ type: "DECREMENT" })}
          className="counter-button negative"
        >
          decrease
        </button>
      </div>
    </div>
  );
};

export default Counter;
