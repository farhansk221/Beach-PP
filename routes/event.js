const express = require('express');
const router = express.Router();
const Event = require('../model/event');

router.post('/event', async (req, res) => {
    const { eventname, organizername, venue, date, time, maxParticipants, description } = req.body;
    const event = await Event.create({ eventname, organizername, venue, date, time, maxParticipants, description });
    res.status(201).json({ message: 'Event created successfully' });
});

module.exports = router;