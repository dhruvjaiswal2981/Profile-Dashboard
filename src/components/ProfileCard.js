import React from "react";
import "./ProfileCard.css";

const ProfileCard = () => {
  return (
    <div className="profile-card">
      {/* Header Section */}
      <div className="profile-header">
        <div className="avatar">CB</div>
        <div className="details">
          <h3>Hannibal Smith</h3>
          <p>
            <i className="location-icon"></i> 1 Market Street, San Francisco, CA 94105
          </p>
        </div>
      </div>

      {/* Information Sections */}
      <div className="info-section">
        <div className="info-row">
          <p>Customer ID</p>
          <div className="info-col">
            <h4>12345</h4>
            <button className="info-menu">⋮</button>
          </div>
        </div>
        <div className="info-row">
          <p>Email Address</p>
          <div className="info-col">
            <h4>rachel@sample.com</h4>
            <button className="info-menu">⋮</button>
          </div>
        </div>
        <div className="info-row">
          <p>Phone Number</p>
          <div className="info-col">
            <h4>8051298905</h4>
            <button className="info-menu">⋮</button>
          </div>
        </div>
        <button className="add-button">+ Add</button>
      </div>

      <div className="info-section">
        <div className="info-row">
          <p>Loyalty Tier</p>
          <div className="info-col">
            <h4>Silver</h4>
            <button className="info-menu">⋮</button>
          </div>
        </div>
        <div className="info-row">
          <p>Segment</p>
          <div className="info-col">
            <h4>Sleepy Customer</h4>
            <button className="info-menu">⋮</button>
          </div>
        </div>
        <button className="add-button">+ Add</button>
      </div>

      <div className="info-section">
        <div className="info-row">
          <p>Lifetime Value</p>
          <div className="info-col">
            <h4>$1M</h4>
            <button className="info-menu">⋮</button>
          </div>
        </div>
        <div className="info-row">
          <p>Propensity to Purchase</p>
          <div className="info-col">
            <h4>
              <span className="highlight yellow">75%</span>
            </h4>
            <button className="info-menu">⋮</button>
          </div>
        </div>
        <button className="add-button">+ Add</button>
      </div>

      <div className="info-section">
        <div className="info-row">
          <p>Engagement Score</p>
          <div className="info-col">
            <h4>
              <span className="highlight green">80%</span>
            </h4>
            <button className="info-menu">⋮</button>
          </div>
        </div>
        <button className="add-button">+ Add</button>
      </div>

      {/* Footer Buttons */}
      <div className="footer-buttons">
        <button className="assign-button">👤 Assign other Agent</button>
        <button className="add-widget-button">Add New Widget</button>
      </div>
    </div>
  );
};

export default ProfileCard;
