import React from "react";

import { useSelector, useDispatch } from "react/redux";
import { decrement, increment, set } from "./actions";
export const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.count);
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={dispatch(increment())}>increase</button>
      <button onClick={dispatch(set(0))}>reset</button>
      <button onClick={dispatch(decrement())}>decrease</button>
    </div>
  );
};
