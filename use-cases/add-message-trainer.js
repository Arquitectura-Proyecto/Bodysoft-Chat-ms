const {makeMessage} = require('../entities')

module.exports = function makeAddMessageTrainer({ chatDb }) {
    return async function addMessageTrainer({ _id, message, id_trainer }) {
        
        message = { ...message, id_author: id_trainer }

        const objectmessage = makeMessage({_id,id_trainer,message})
        
        const chat = await chatDb.findChatById({_id:objectmessage._id});

        if(chat.id_trainer != id_trainer){
            throw new Error('The trainer does not exist in this chat')
        }

        //console.log("ADD-MESAGE",objectmessage)

        return chatDb.insertMessage(objectmessage)
    }
}
