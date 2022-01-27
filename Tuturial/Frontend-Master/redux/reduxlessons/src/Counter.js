import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { decrement, increment, reset } from "./actions";
import { store } from "./store";
export const Counter = () => {
  const counter = useSelector((state) => state.counterReducer);
  /*   const state = store.getState();
  console.log(state); */
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Hello World</h1>
      <h3>Counter</h3>
      <h3>{counter}</h3>
      <button onClick={() => dispatch(increment())}>Increase</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
      <button onClick={() => dispatch(decrement())}>Decrease</button>
    </div>
  );
};
