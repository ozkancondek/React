import React from "react";
import { useNavigate } from "react-router-dom";

import { Button } from "../components/Button";
import { Header } from "../components/Header";
import { style } from "../style/Style";

export const Welcome = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    alert("You are going to another page");
    navigate("/about");
  };
  return (
    <div style={style}>
      <h2>Welcome to our page</h2>
      <Header name="ozkan" />
      <Button handleClick={handleClick} />
    </div>
  );
};
