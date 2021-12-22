import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button";
import { style } from "../style/Style";
export const About = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    alert("You are going to another page");
    navigate("/");
  };
  return (
    <div style={style}>
      <h2>This is about page</h2>
      <Button name="welcome" backgroundColor="red" handleClick={handleClick}>
        Go to home
      </Button>
    </div>
  );
};
