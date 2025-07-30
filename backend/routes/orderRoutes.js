const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');

// POST /api/orders - Create a new order
router.post('/', orderController.createOrder);

// GET /api/orders - Get all orders (admin only)
router.get('/', orderController.getAllOrders);

// GET /api/orders/:userId - Get orders by user ID
router.get('/:userId', orderController.getOrdersByUserId);

// PUT /api/orders/:id - Update order status
router.put('/:id', orderController.updateOrderStatus);

// DELETE /api/orders/:id - Delete an order (admin only)
router.delete('/:id', orderController.deleteOrder);

module.exports = router;
