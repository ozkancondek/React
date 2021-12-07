import React from "react";

const alertNow = () => {
  alert("You clicked to button");
};

export const AddEvent = (props) => {
  return (
    <div>
      <h3>Function method</h3>
      <button onClick={alertNow}>Click</button>
      <br />
      <button onClick={props.sendFunc}>Prop</button>
    </div>
  );
};
