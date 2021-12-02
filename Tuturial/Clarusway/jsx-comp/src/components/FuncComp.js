import React from "react";
import { useState } from "react";

function FuncComp(props) {
  let str = "FuncComp";
  const [counter, setCounter] = useState(0);
  const [color, colorSet] = useState("blue");
  const increaseCounter = () => {
    setCounter(counter + 1);
  };
  const decreaseCounter = () => {
    setCounter(counter - 1);
  };
  return (
    <div>
      <h1>Welcome to ReactJS-{str}</h1>
      <p>Age:{props.y}</p>
      <p>Color:{props.z.toUpperCase()}</p>
      <p>Counter:{counter}</p>
      <button onClick={increaseCounter}>Increase</button>
      <button onClick={decreaseCounter}>Decrease</button>
    </div>
  );
}

export default FuncComp;
