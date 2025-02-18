const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');

// Route for handling orders
router.post('/', orderController.submitOrder);
router.get('/', orderController.getOrders);

module.exports = router;