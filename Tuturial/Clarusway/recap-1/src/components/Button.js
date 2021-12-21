import React from "react";
import { style } from "../style/Style";
export const Button = ({ handleClick }) => {
  return (
    <div style={style}>
      Button Component
      <br />
      <button onClick={handleClick}>go to about</button>
    </div>
  );
};
