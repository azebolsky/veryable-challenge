import React, { useState } from "react";
import "stylesheets/User.css";
import { ReactComponent as UserIcon } from "Assets/user.svg";
import { ReactComponent as ExpandMoreIcon } from "Assets/expand_more.svg";
import { ReactComponent as ExpandLessIcon } from "Assets/expand_less.svg";

const User = ({ user }) => {
  const [isSelected, setIsSelected] = useState(false);

  // adjust date to short date format...doesnt work in IE :(
  const correctedCreatedDate = new Date(user.createdAt).toLocaleDateString(
    "en-US"
  );
  const correctedLastLoginDate = new Date(user.lastLoggedIn).toLocaleDateString(
    "en-US"
  );

  const showAdditionalInfo = (e) => {
    e.preventDefault();
    setIsSelected(!isSelected);
  };

  return (
    <div className="content" onClick={showAdditionalInfo}>
      <section className="user-container">
        <UserIcon style={{ fill: `${user.iconColor}` }} className="user-icon" />
        <div className="user-content">
          <h1 className="user-name">{`${user.firstName} ${user.lastName}`}</h1>
          <p className="user-role">{user.role}</p>
          <p className="user-email">{user.email}</p>
        </div>

        {!isSelected ? (
          <ExpandMoreIcon className="expand-icon" />
        ) : (
          <ExpandLessIcon className="expand-icon" />
        )}
      </section>
      <section>
        {/* if expand button clicked, the additional content class name will be added allowing content to show */}
        <div className={!isSelected ? "no-display" : "additional-user-content"}>
          <h1 className="detail-header">Address</h1>
          <p className="detail-item">
            {user.street}, {user.city}, {user.state} {user.zip}
          </p>
          <h1 className="detail-header">Phone</h1>
          <p className="detail-item">
            {/* regex to correct phone number to (111) 111-1111 format */}
            {user.phone.replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3")}
          </p>
          <h1 className="detail-header">Created At</h1>
          <p className="detail-item">{correctedCreatedDate} 6:01 AM</p>
          <h1 className="detail-header">Last Logged In</h1>
          <p className="detail-item">{correctedLastLoginDate} 6:02 AM</p>
        </div>
      </section>
    </div>
  );
};

export default User;
