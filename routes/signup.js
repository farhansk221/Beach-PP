const express = require('express');
const router = express.Router();
const User = require('../model/user');

router.post('/signup', async (req, res) => {
    const { firstname, lastname, email, phone, password } = req.body;
    const user = await User.create({ firstname, lastname, email, phone, password });
    res.status(201).json(user);
});

module.exports = router;