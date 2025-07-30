import React from 'react';
import Table from '../components/Table';

const Users = () => {
  const users = [
    { id: 1, username: 'admin', email: 'admin@example.com' },
    { id: 2, username: 'john.doe', email: 'john@example.com' },
  ];

  const headers = ['Username', 'Email'];
  const data = users.map(user => [user.username, user.email]);

  return (
    <div className="users-page">
      <h1 className="dashboard-page-header">Users</h1>
      <div className="messages-list-container">
        <Table headers={headers} data={data} />
      </div>
    </div>
  );
};

export default Users;
