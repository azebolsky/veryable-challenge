import React, { useState } from "react";
import "stylesheets/User.css";
import { ReactComponent as Icon } from "Assets/user.svg";
import { ReactComponent as Icon2 } from "Assets/expand_more.svg";

const User = ({ user }) => {
  const [isSelected, setIsSelected] = useState(false);

  const showAdditionalInfo = (e) => {
    e.preventDefault();
    setIsSelected(!isSelected);
  };

  return (
    <div className="content">
      <section className="user-container">
        <Icon style={{ fill: `${user.iconColor}` }} className="user-icon" />
        <div className="user-content">
          <h1 className="user-name">{`${user.firstName} ${user.lastName}`}</h1>
          <p className="user-role">{user.role}</p>
          <p className="user-email">{user.email}</p>
        </div>

        <Icon2 onClick={showAdditionalInfo} className="expand-more-icon" />
      </section>
      <section>
        <div className={!isSelected ? "no-display" : "additional-user-content"}>
          <h1 className="detail-header">Address</h1>
          <p className="detail-item">
            `${user.street}, ${user.city}, ${user.state} ${user.zip}`
          </p>
          <h1 className="detail-header">Phone</h1>
          <p className="detail-item">`${user.phone}`</p>
          <h1 className="detail-header">Created At</h1>
          <p className="detail-item">`${user.createdAt}`</p>
          <h1 className="detail-header">Last Logged In</h1>
          <p className="detail-item">`${user.lastLoggedIn}`</p>
        </div>
      </section>
    </div>
  );
};

export default User;
