import React from "react";
import PropTypes from "prop-types";
import { Button } from "./Button";

export const Header = ({ title }) => {
  const handleClick = () => {
    console.log("object");
  };
  return (
    <header>
      <h1>{title}</h1>;
      <Button
        color="purple"
        text="Show Add Task bar"
        handleClick={handleClick}
      />
      ;
    </header>
  );
};

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
