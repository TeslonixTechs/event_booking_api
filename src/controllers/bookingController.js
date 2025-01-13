const Event = require('../models/Event');
const Booking = require('../models/Booking');
const User = require('../models/User');

// Book an event
const bookEvent = async (req, res) => {
    const { eventId } = req.params;
    const { userId } = req.body; // Assume userId is sent in the request body

    try {
        // Check if the event exists
        const event = await Event.findById(eventId);
        if (!event) {
            return res.status(404).json({ message: 'Event not found' });
        }

        // Check if the user exists
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Create a booking
        const booking = await Booking.create({
            user: userId,
            event: eventId,
            bookingDate: new Date(),
        });

        res.status(201).json({
            message: 'Event booked successfully',
            booking,
        });
    } catch (error) {
        res.status(500).json({ message: 'Error booking event', error });
    }
};

// Get all bookings for a user
const getUserBookings = async (req, res) => {
    const { userId } = req.params;

    try {
        const bookings = await Booking.find({ user: userId }).populate('event');
        res.status(200).json(bookings);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching bookings', error });
    }
};

module.exports = { bookEvent, getUserBookings };
