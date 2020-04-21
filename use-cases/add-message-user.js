const { makeMessage } = require('../entities')

module.exports = function makeAddMessageUser({ chatDb }) {
    return async function addMessageUser({ _id, message, id_user }) {
        message = { ...message, id_author: id_user }

        const objectmessage = makeMessage({ _id, id_user, message })

        const chat = await chatDb.findChatById({ _id: objectmessage._id });

        //console.log("chat.id_user: "+chat.id_user +" !== id_user: "+id_user)

        if(chat.id_user != id_user){
            throw {data: 'The user does not exist in this chat', status : 400};
        }
        
        //console.log("ADD-MESAGE",objectmessage)

        return chatDb.insertMessage(objectmessage)
    }
}
