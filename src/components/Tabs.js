import React from "react";
import "./Tabs.css";

const Tabs = () => {
  const tabs = [
    "Cheyenne Bergson",
    "Jonathan Higgins",
    "Capt. Trunk",
    "Hannibal Smith",
    "Capt. Trunk",
    "Hannibal Smith",
    "Messaging",

  ];

  return (
    <div className="tabs">
      {tabs.map((tab, index) => (
        <button key={index} className={`tab ${index === 3 ? "active" : ""}`}>
          {tab}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
