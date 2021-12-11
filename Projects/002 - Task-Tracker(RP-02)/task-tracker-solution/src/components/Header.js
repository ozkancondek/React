// import React from 'react'
import PropTypes from "prop-types";
import Button from "./Button";

const Header = ({ title = "Task Tracker", toggleShow, showAddTask }) => {
  const handleClick = () => {
    console.log("Click with handleClick from Header");
  };
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button
        color={showAddTask ? "red" : "purple"}
        text={showAddTask ? "Close Add Task Bar" : "Show Add Task Bar"}
        toggleShow={toggleShow}
      />
    </header>
  );
};
export default Header;
/* export const Header = ( ) => {
  return <h1>{title}</h1>;
};

Header.defaultProps = { 
  title:"Task Tracker"

  if the function cant get the props, uses this variable
} */

//usage of proptypes
Header.propTypes = {
  title: PropTypes.string.isRequired,
};
