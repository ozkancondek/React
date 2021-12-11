import React from "react";

export const Button = ({ handleClick, color, text }) => {
  return (
    <div>
      <button
        className="btn"
        onClick={handleClick}
        style={{ backgroundColor: color }}
      >
        {text}
      </button>
    </div>
  );
};
