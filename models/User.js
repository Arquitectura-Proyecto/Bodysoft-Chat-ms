const mongoose = require('mongoose')

const User = new mongoose.Schema({
    name: {type: String, default:''},
})

module.exports = mongoose.model('User', User)