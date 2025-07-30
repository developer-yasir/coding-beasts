import React from 'react';
import Card from '../components/Card';

const Dashboard = () => {
  return (
    <div className="dashboard-page">
      <h1 className="dashboard-page-header">Dashboard</h1>
      <div className="grid-layout grid-col-1 md-grid-col-3">
        <Card title="Total Contacts" value="120" />
        <Card title="Total Users" value="50" />
        <Card title="New Messages" value="15" />
      </div>
    </div>
  );
};

export default Dashboard;
