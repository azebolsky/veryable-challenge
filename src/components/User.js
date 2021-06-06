import React from "react";
import "stylesheets/User.css";
import { ReactComponent as Icon } from "Assets/user.svg";
import { ReactComponent as Icon2 } from "Assets/expand_more.svg";

const User = ({ user }) => {
  return (
    <section className="user-container">
      <Icon style={{ fill: `${user.iconColor}` }} className="user-icon" />
      <div className="user-content">
        <h1 className="user-name">{`${user.firstName} ${user.lastName}`}</h1>
        <p className="user-role">{user.role}</p>
        <p className="user-email">{user.email}</p>
      </div>
      <Icon2 className="expand-more-icon" />
    </section>
  );
};

export default User;
