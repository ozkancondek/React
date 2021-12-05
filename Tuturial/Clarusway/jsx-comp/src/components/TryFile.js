import React from "react";
import { useState } from "react";
const mystyle = {
  color: "blue",
  backgroundColor: "DodgerBlue",
  padding: "10px",
  fontFamily: "Arial",
};
const TryFile = (props) => {
  return (
    <>
      <h1 style={mystyle}>Owner Info</h1>

      <p>My name is {props.name}</p>
      <p>My Surname is {props.surname}</p>
    </>
  );
};

export default TryFile;
