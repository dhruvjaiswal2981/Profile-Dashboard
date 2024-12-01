import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header-title">
        <h2>Chat / Feed Chat</h2>
      </div>
      <div className="header-actions">
        <button className="btn">Process Owner HOD</button>
        <button className="btn">Admin</button>
        <img
          src="https://via.placeholder.com/40"
          alt="Profile"
          className="profile-image"
        />
      </div>
    </header>
  );
};

export default Header;
