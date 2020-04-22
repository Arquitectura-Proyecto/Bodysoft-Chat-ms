const { Schema, model } = require('mongoose');

const chatSchema = new Schema({
    date: {
        type: Date,
        default: new Date()
    },
    id_user:{
        type:Number,
        required:true,
    },
    id_trainer:{
        type:Number,
        required:true
    },
    messages:[{
        id_author:Number,
        content:String,
        date:{
            type: Date,
            default: new Date()
        },
    }]
})

module.exports = model('Chat',chatSchema);