import React from "react";
import { myStyle } from "./Styles.js";

export const Stylesheet = () => {
  return (
    <div>
      <h2 style={myStyle.header}>import a seperate js object</h2>
    </div>
  );
};
