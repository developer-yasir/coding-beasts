import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-left">
        <h1 className="header-title">Dashboard</h1>
      </div>
      <div className="header-center">
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
        </div>
      </div>
      <div className="header-right">
        <div className="header-action">
          <div className="notification-dropdown">
            <button onClick={() => setIsNotificationsOpen(!isNotificationsOpen)} className="notification-btn">
              <i className="fas fa-bell"></i>
            </button>
            {isNotificationsOpen && (
              <div className="dropdown-menu">
                <div className="dropdown-item">Notification 1</div>
                <div className="dropdown-item">Notification 2</div>
                <div className="dropdown-item">Notification 3</div>
              </div>
            )}
          </div>
        </div>
        <div className="header-action">
          <div className="profile-dropdown">
            <button onClick={() => setIsProfileOpen(!isProfileOpen)} className="profile-btn">
              <div className="avatar-placeholder"></div>
              <span>User Name</span>
            </button>
            {isProfileOpen && (
              <div className="dropdown-menu">
                <Link to="/profile" className="dropdown-item">Profile</Link>
                <Link to="/settings" className="dropdown-item">Settings</Link>
                <button className="dropdown-item">Logout</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
