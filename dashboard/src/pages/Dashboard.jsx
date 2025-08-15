import React from 'react';
import Card from '../components/Card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', users: 400, orders: 240 },
  { name: 'Feb', users: 300, orders: 139 },
  { name: 'Mar', users: 200, orders: 980 },
  { name: 'Apr', users: 278, orders: 390 },
  { name: 'May', users: 189, orders: 480 },
  { name: 'Jun', users: 239, orders: 380 },
  { name: 'Jul', users: 349, orders: 430 },
];

const Dashboard = () => {
  return (
    <div className="dashboard-page">
      <h1 className="dashboard-page-header">Dashboard</h1>
      <div className="grid-layout">
        <Card title="Total Contacts" value="120" icon={<i className="fas fa-address-book"></i>} />
        <Card title="Total Users" value="50" icon={<i className="fas fa-users"></i>} />
        <Card title="New Messages" value="15" icon={<i className="fas fa-envelope"></i>} />
      </div>
      <div className="chart-container">
        <h2>Users and Orders Overview</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="users" fill="var(--primary-color)" />
            <Bar dataKey="orders" fill="var(--secondary-color)" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Dashboard;
