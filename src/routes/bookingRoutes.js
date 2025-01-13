const express = require('express');
const { bookEvent, getUserBookings } = require('../controllers/bookingController');
const router = express.Router();

// Route to book an event
router.post('/:eventId', bookEvent);

// Route to get all bookings for a user
router.get('/user/:userId', getUserBookings);

module.exports = router;
