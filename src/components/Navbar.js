import React from "react";
import "stylesheets/Navbar.css";
import { ReactComponent as Icon } from "Assets/group.svg";

const Navbar = () => {
  return (
    <section className="nav-container">
      <div className="nav-content">
        <Icon className="users-icon" />
        <h1 className="nav-header">USERS</h1>
      </div>
    </section>
  );
};

export default Navbar;
