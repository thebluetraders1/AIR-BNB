const express = require('express');
const router = express.Router();
const { createBooking, getUserBookings } = require('../controllers/bookingController');
const { auth } = require('../middleware/auth');

router.post('/', auth, createBooking);
router.get('/', auth, getUserBookings);

module.exports = router;
