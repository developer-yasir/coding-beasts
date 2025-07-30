import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h1 className="sidebar-title">Admin Dashboard</h1>
      <ul className="sidebar-nav">
        <li className="sidebar-nav-item"><Link to="/dashboard" className="sidebar-nav-link">Dashboard</Link></li>
        <li className="sidebar-nav-item"><Link to="/orders" className="sidebar-nav-link">Orders</Link></li>
        <li className="sidebar-nav-item"><Link to="/messages" className="sidebar-nav-link">Messages</Link></li>
        <li className="sidebar-nav-item"><Link to="/users" className="sidebar-nav-link">Users</Link></li>
        <li className="sidebar-nav-item"><Link to="/settings" className="sidebar-nav-link">Settings</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
