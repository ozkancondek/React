import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/Button";

export const About = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    alert("You are going to another page");
    navigate("/");
  };
  return (
    <div>
      <h2>This is about page</h2>
      <Button handleClick={handleClick}>Go to home</Button>
    </div>
  );
};
