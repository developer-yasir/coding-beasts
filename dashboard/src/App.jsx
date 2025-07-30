import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';
import Messages from './pages/Messages';
import Users from './pages/Users';
import Settings from './pages/Settings';
import Orders from './pages/Orders';

function App() {
  return (
    <Router>
      <div className="dashboard-layout">
        <Sidebar />
        <div className="dashboard-content-area">
          <Header />
          <div className="dashboard-main-content">
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/messages" element={<Messages />} />
              <Route path="/users" element={<Users />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;