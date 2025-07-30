import React from 'react';
import Table from '../components/Table';

const Messages = () => {
  const messages = [
    { id: 1, name: 'John Doe', email: 'john@example.com', message: 'I have a question about your services.' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', message: 'Can I get a quote for a new website?', },
  ];

  const headers = ['Name', 'Email', 'Message'];
  const data = messages.map(msg => [msg.name, msg.email, msg.message]);

  return (
    <div className="messages-page">
      <h1 className="dashboard-page-header">Messages</h1>
      <div className="messages-list-container">
        <Table headers={headers} data={data} />
      </div>
    </div>
  );
};

export default Messages;
