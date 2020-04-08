const mongoose = require('mongoose')

const Trainer = new mongoose.Schema({
    name: {type: String, default:''}
})

module.exports = mongoose.model('Trainer', Trainer)