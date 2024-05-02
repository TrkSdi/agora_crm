/* eslint-disable no-unused-vars */
import React from "react";
import users from "../data";
import { Link } from "react-router-dom";
import "./ProfileIcon.css";

const ProfileIcon = () => {
  const { image, firstName, lastName, role } = users[0];
  console.log(image);
  return (
    <div className="user-icon">
      <img src={image} alt={firstName} />
      <div className="user-info">
        <Link to="profile">
          <h3>
            {firstName} {lastName.toUpperCase()}
          </h3>
        </Link>
        <Link className="logout" to="/login">
          Déconnexion
        </Link>
      </div>
    </div>
  );
};

export default ProfileIcon;
