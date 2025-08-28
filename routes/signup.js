const express = require('express');
const router = express.Router();
const User = require('../model/user');

router.post('/signup', async (req, res) => {
    const firstname = (req.body.firstname || '').trim();
    const lastname = (req.body.lastname || '').trim();
    const email = (req.body.email || '').trim().toLowerCase();
    const phone = (req.body.phone || '').trim();
    const password = (req.body.password || '').trim();
    const user = await User.create({ firstname, lastname, email, phone, password });
    res.status(201).json(user);
});

module.exports = router;