import React from "react";
import { style } from "../style/Style";

const btnStyle = {
  borderRadius: "5px",
  fontSize: "20px",
};
export const Button = ({ name, handleClick, backgroundColor }) => {
  return (
    <div style={style}>
      Button Component
      <br />
      <button
        style={{ ...btnStyle, backgroundColor: backgroundColor }}
        onClick={handleClick}
      >
        go to {name}
      </button>
    </div>
  );
};
