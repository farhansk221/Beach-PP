const express = require('express');
const app = express();
const connect = require('./connection.js/connect');
const signup = require('./routes/signup');
const login = require('./routes/login');
const event = require('./routes/event');
const success = require('./routes/success');
const cors = require('cors');
const mongoose = require('mongoose');
const User = require('./model/user');
connect();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const allowedOrigin = process.env.FRONTEND_ORIGIN || '*';
app.use(cors());


app.use('/api', signup);
app.use('/api', login);
app.use('/api', event);
app.use('/api', success);
app.get('/', (req, res) => {
    res.send('Hello World');
});

// Drop legacy unique index on lastname if it exists
mongoose.connection.on('connected', async () => {
    try {
        await mongoose.connection.db.collection('users').dropIndex('lastname_1');
        console.log('Dropped legacy index lastname_1');
    } catch (err) {
        if (err && (err.codeName === 'IndexNotFound' || err.message.includes('index not found'))) {
            // ignore if index does not exist
        } else if (err && err.message && err.message.includes('ns not found')) {
            // collection may not exist yet; ignore
        } else {
            console.warn('Index drop check:', err.message || err);
        }
    }
    try {
        await User.syncIndexes();
        console.log('')
    } catch (e) {
        console.warn('Failed to sync User indexes:', e.message || e);
    }
});

// in server/index.js, before app.listen
app.get('/api/health', (req, res) => {
    res.json({ status: 'ok' });
  });

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});