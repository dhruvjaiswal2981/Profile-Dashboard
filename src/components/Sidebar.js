import React from "react";
import "./Sidebar.css";

const Sidebar = () => {
  const menuItems = [
    "Internal Audit",
    "UAT Testing",
    "Intrct",
    "Queue",
    "Workflow",
    "Admin",
    "Asset",
    "Parent",
    "Option One",
    "Option Two",
    "All Accessories",
    "Internal Audit",
    "Decorating",
    "Presenting",
  ];

  return (
    <aside className="sidebar">
      <div className="logo">Risk Hawk</div>
      <ul className="menu">
        {menuItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
