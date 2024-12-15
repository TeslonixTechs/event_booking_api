const express = require('express');
const { getAllEvents, createEvent, deleteEvent } = require('../controllers/eventController');
const router = express.Router();

router.get('/', getAllEvents);
router.post('/', createEvent);
router.delete('/:id', deleteEvent);

module.exports = router;