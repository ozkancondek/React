import React from "react";
import { style } from "../style/Style";

export const Header = ({ name }) => {
  return (
    <div style={style}>
      <h3>This is the header component</h3>
      <h4>props:{name}</h4>
    </div>
  );
};
