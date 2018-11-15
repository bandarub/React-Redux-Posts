import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="collapsableNavigation">
      <h1 className="homeHeading">Welcome to Post-App</h1>
      <ul className="navigation">
          <input type="checkbox" id="collapse" />
          <label for="collapse" />
          <li>
            <NavLink
              exact
              to="/"
              activeStyle={{
                fontWeight: "bold",
                color: "black"
              }}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/newpost"
              activeStyle={{
                fontWeight: "bold",
                color: "black"
              }}
            >
              Add Post
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/About"
              activeStyle={{
                fontWeight: "bold",
                color: "black"
              }}
            >
              About App
            </NavLink>
          </li>
        </ul>
    </div>
  );
};

export default Navigation;
