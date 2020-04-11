const {makeMessage} = require('../entitiestemp')

module.exports = function makeAddMessage({ chatDb }) {
    return function addMessage({ _id, message, id_user, id_trainer }) {
        if(id_user){
            message = { ...message, id_author: id_user }
        }else{
            message = { ...message, id_author: id_trainer }
        }

        const objectmessage = makeMessage({_id,id_user,id_trainer,message})

        //console.log("ADD-MESAGE",objectmessage)

        return chatDb.insertMessage(objectmessage)
    }
}