const { Schema, model } = require('mongoose');

const conversationSchema = new Schema({
    date: {
        type: Date,
        default: new Date()
    },
    idUser:{
        type:Number,
        required:true,
    },
    idTrainer:{
        type:Number,
        required:true
    },
    messages:[{
        idAuthor:Number,
        content:String,
        date:{
            type: Date,
            default: new Date()
        },
    }]
})

module.exports = model('Conversation',conversationSchema);