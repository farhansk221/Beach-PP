const express = require('express');
const router = express.Router();
const Success = require('../model/success');

router.post('/success', async (req, res) => {
    const { eventname, date, location, volunteers, totalweight, totalplastic, totalplasticbags } = req.body;
    const success = await Success.create({ eventname, date, location, volunteers, totalweight, totalplastic, totalplasticbags });
    res.status(201).json(success);
});

module.exports = router;