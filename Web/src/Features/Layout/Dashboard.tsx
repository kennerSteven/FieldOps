import React, { useState } from "react";
import { menuItems, MenuItem } from "../../data/menuItems";
import "./Dashboard.css";

export const Sidebar: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("reportes");

  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
        <span>FieldOps</span>
      </div>

      <nav className="nav-group">
        {menuItems.map((item: MenuItem) => (
          <div
            key={item.id}
            className={`nav-item ${activeTab === item.id ? "active" : ""}`}
            onClick={() => setActiveTab(item.id)}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d={item.icon} />
            </svg>
            <span className="nav-label">{item.label}</span>
          </div>
        ))}
      </nav>
    </aside>
  );
};