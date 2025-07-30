import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

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
          <button className="notification-btn">
            {/* Add a notification icon here */}
            <span>Notifications</span>
          </button>
        </div>
        <div className="header-action">
          <div className="profile-dropdown">
            <button onClick={() => setIsProfileOpen(!isProfileOpen)} className="profile-btn">
              {/* Add a user avatar here */}
              <span>User Name</span>
            </button>
            {isProfileOpen && (
              <div className="dropdown-menu">
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
