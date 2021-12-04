import React from "react";
import { useState } from "react";

function FreeLine(prop) {
  let str = "Click Buttons to play with counter";
  const [counter, setCounter] = useState(0);

  const increaseCounter = () => {
    setCounter(counter + 1);
  };
  const decreaseCounter = () => {
    setCounter(counter - 1);
  };
  return (
    <div>
      <h3>{str}</h3>

      <p>Counter:{counter}</p>
      <button onClick={increaseCounter}>Increase</button>
      <button onClick={decreaseCounter}>Decrease</button>
    </div>
  );
}

export default FreeLine;
