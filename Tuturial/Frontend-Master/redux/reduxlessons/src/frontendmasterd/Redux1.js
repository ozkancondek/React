import React from "react";

import { compose, createStore } from "redux";

export const Redux1 = () => {
  //compose()

  const upperer = (string) => string.toUpperCase();
  const bolder = (string) => string.bold();
  const repeater = (string) => string.repeat(3);
  //if I want to use all these three functions together

  const combinedFunctionsOutput = (string) => repeater(bolder(upperer(string)));
  //console.log(combinedFunctionsOutput("hello"));

  //compose method

  const withCompose = compose(upperer, bolder, repeater);

  //console.log(withCompose("hello"));

  //creating store

  const initialState = { value: 0 };
  const INCREMENT = "INCREMENT";
  const ADD = "ADD";

  const incrementAction = { type: INCREMENT };

  const increment = () => ({ type: INCREMENT });
  const add = (amount) => ({ type: ADD, payload: amount });

  const reducer = (state = initialState, action) => {
    if (action.type === INCREMENT) {
      return { value: state.value + 1 };
    }
    if (action.type === ADD) {
      return { value: state.value + action.payload };
    }
    return state;
  };
  const store = createStore(reducer);

  const subscriber = store.dispatch(increment());
  console.log(store.getState());
  // console.log(store);

  return <div></div>;
};
