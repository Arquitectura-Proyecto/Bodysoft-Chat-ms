const mongoose = require('mongoose')
const Message = new mongoose.Schema({
    userId : {type: String, default: ''},
    trainerId : {type: String, default: ''},
    content: {type: String, default:''},
    date: {type: Date, default: Date.now},
})

module.exports = mongoose.model('Message', Message)