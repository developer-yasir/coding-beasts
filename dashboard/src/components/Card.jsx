import React from 'react';

const Card = ({ title, value }) => {
  return (
    <div className="info-card">
      <h2 className="info-card-title">{title}</h2>
      <p className="info-card-value">{value}</p>
    </div>
  );
};

export default Card;
