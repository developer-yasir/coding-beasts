import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const PlaceOrder = () => {
  const { serviceId } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [notes, setNotes] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle order submission logic here
    alert(`Order placed for service ${serviceId} with quantity ${quantity} and notes: ${notes}`);
  };

  return (
    <div className="place-order-page">
      <div className="container">
        <h1>Place Order</h1>
        <form onSubmit={handleSubmit} className="order-form">
          <div className="form-group">
            <label htmlFor="serviceId">Service ID</label>
            <input type="text" id="serviceId" value={serviceId} disabled />
          </div>
          <div className="form-group">
            <label htmlFor="quantity">Quantity</label>
            <input type="number" id="quantity" value={quantity} onChange={(e) => setQuantity(e.target.value)} min="1" required />
          </div>
          <div className="form-group">
            <label htmlFor="notes">Notes</label>
            <textarea id="notes" value={notes} onChange={(e) => setNotes(e.target.value)}></textarea>
          </div>
          <button type="submit" className="btn">Place Order</button>
        </form>
      </div>
    </div>
  );
};

export default PlaceOrder;
