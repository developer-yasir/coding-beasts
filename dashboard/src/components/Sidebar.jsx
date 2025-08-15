import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h1 className="sidebar-title">Admin Dashboard</h1>
      <ul className="sidebar-nav">
        <li className="sidebar-nav-item">
          <Link to="/dashboard" className="sidebar-nav-link">
            <span className="sidebar-nav-icon"></span>
            <span className="sidebar-nav-text">Dashboard</span>
          </Link>
        </li>
        <li className="sidebar-nav-item">
          <Link to="/orders" className="sidebar-nav-link">
            <span className="sidebar-nav-icon"></span>
            <span className="sidebar-nav-text">Orders</span>
          </Link>
        </li>
        <li className="sidebar-nav-item">
          <Link to="/messages" className="sidebar-nav-link">
            <span className="sidebar-nav-icon"></span>
            <span className="sidebar-nav-text">Messages</span>
          </Link>
        </li>
        <li className="sidebar-nav-item">
          <Link to="/users" className="sidebar-nav-link">
            <span className="sidebar-nav-icon"></span>
            <span className="sidebar-nav-text">Users</span>
          </Link>
        </li>
        <li className="sidebar-nav-item">
          <Link to="/settings" className="sidebar-nav-link">
            <span className="sidebar-nav-icon"></span>
            <span className="sidebar-nav-text">Settings</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
