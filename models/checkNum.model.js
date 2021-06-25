const mongoose = require('mongoose');

const CheckNum = new mongoose.Schema({
    checkNum: Number
})


module.exports = mongoose.model('checkNum', CheckNum)