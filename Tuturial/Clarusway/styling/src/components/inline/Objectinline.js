import React from "react";

const myStyle = {
  header: {
    color: "blue",
    backgroundColor: "aqua",
    fontWeight: "bolder",
    fontSize: "1.3rem",
  },
  paragraph: {
    fontSize: "1.2rem",
    color: "green",
  },
};

const { header, paragraph } = myStyle; // take oonly these elements from myStyle object

function Objectinline() {
  return (
    <div>
      {/* <h3 style={myStyle.header}>Object Style</h3>
      <p style={myStyle.paragraph}>This is my paragraph</p> */}
      <h3 style={header}>Object Style</h3>
      <p style={paragraph}>This is my paragraph</p>
    </div>
  );
}

export default Objectinline;
