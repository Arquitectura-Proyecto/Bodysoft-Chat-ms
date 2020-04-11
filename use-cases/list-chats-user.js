module.exports = function makeListChatsUser({chatDb}){
    return function listChatsUser({id_user}){
        if(!id_user){
            throw new Error('You must supply a user id')
        }
        return chatDb.findByIdUser({id_user})
    }
}