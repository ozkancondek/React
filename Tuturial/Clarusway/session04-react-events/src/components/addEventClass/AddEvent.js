import React from "react";

const alertNow = () => {
  alert("You clicked to button");
};

export const AddEvent = (props) => {
  return (
    <div>
      <button onClick={alertNow}>Click</button>
      <br />
      <button onClick={props.sendFunc}>Prop</button>
    </div>
  );
};
