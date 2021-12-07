import { useState } from "react";
import "./styles.css";

const MouseEvents = () => {
  const [coordx, setCoordx] = useState();
  const [coordy, setCoordy] = useState();
  // click event
  // doubleClick event
  // mouseMove event
  const handleClick = (e) => {
    console.log("event", e);
    console.log("this is general element", e.currentTarget);
  };
  const handleDoubleClick = (e) => {
    console.log("event", e);
    console.log("item id:", e.target.id);
  };
  const onMouseMove = (e) => {
    e.target.style.backgroundColor = "red";
    /*   setCoordx(e.nativeEvent.offsetX);
    setCoordy(e.nativeEvent.offsetY); */
    setCoordx(e.pageX);
    setCoordy(e.pageY);
  };
  const handleMouseDown = (e) => {
    e.target.style.backgroundColor = "green";
    e.target.draggeble = "true";
  };
  return (
    <>
      <h2>MouseEvents</h2>
      <p>
        <span>{coordx}</span> and X
      </p>
      <p>
        <span>{coordy}</span> and Y
      </p>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <ul>
          <li id="todo-1" onClick={handleClick}>
            todo item 1 <span>X</span>
          </li>
          <li id="todo-2 " onDoubleClick={handleDoubleClick}>
            todo item 2 <span>X</span>
          </li>
          <li onMouseMove={onMouseMove}>
            todo item 3 <span>X</span>
          </li>
          <li onMouseDown={handleMouseDown}>
            todo item 4 <span>X</span>
          </li>
          <li>
            todo item 5 <span>X</span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default MouseEvents;
