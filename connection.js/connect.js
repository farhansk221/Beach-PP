const mongoose = require('mongoose');

const connect = async () => {
    try {
        const uri = process.env.MONGO_URL || 'mongodb://localhost:27017/BeachCleaning';
        await mongoose.connect(uri);
        console.log('Connected to MongoDB');
    } catch (error) {
        console.log(error);
    }
}

module.exports = connect;