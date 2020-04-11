module.exports = function makeAddMessage({ chatDb }) {
    return function addMessage({ _id, message, id_user, id_trainer }) {
        if(id_user){
            message = { ...message, id_author: id_user }
        }else{
            message = { ...message, id_author: id_trainer }
        }
        
        return chatDb.insertMessage({ _id, message, id_user, id_trainer })
    }
}