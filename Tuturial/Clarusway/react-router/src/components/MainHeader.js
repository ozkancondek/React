import React from "react";
import { NavLink } from "react-router-dom";

export const MainHeader = () => {
  return (
    <header>
      <nav>
        <ul style={{ listStyleType: "none" }}>
          <li>
            <NavLink
              className={(navData) => (navData.isActive ? "active" : "")}
              to="/"
            >
              Welcome
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(navData) => (navData.isActive ? "active" : "")}
              to="/products"
            >
              Products
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(navData) => (navData.isActive ? "active" : "")}
              to="/productDetail"
            >
              Product Details
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
