import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <div className="header">
        <h1 className="home-heading">Welcome to Post-App</h1>
      </div>
      <div className="navigation">
        <NavLink
          exact
          to="/"
          activeStyle={{
            fontWeight: "bold",
            color: "orange"
          }}
        >
          Home
        </NavLink>
        <NavLink
          to="/newpost"
          activeStyle={{
            fontWeight: "bold",
            color: "orange"
          }}
        >
          Add Post
        </NavLink>
        <NavLink
          to="/About"
          activeStyle={{
            fontWeight: "bold",
            color: "orange"
          }}
        >
          About App
        </NavLink>
      </div>
    </div>
  );
};

export default Navigation;
