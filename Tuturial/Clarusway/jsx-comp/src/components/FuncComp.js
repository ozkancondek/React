import React from "react";

function FuncComp(props) {
  let str = "FuncComp";
  return (
    <>
      <h1>Welcome to ReactJS-{str}</h1>
      <p>Age:{props.y}</p>
      <p>Color:{props.z.toUpperCase()}</p>
    </>
  );
}

export default FuncComp;
