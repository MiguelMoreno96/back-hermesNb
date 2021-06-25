const mongoose = require('mongoose');

const connectDB = async() => {
    try {
        const conn = await mongoose.connect('mongodb://localhost:27017/DataGroup', {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true
        });
        console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline.bold);
    } catch (e) {
        console.error('Error in Data base connection'.bold.red)
    }
}


module.exports = connectDB;
