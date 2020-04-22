module.exports = function makeListChatsUser({chatDb}){
    return function listChatsUser({id_user}){
        if(!id_user){
            throw {data: 'You must supply a user id', status : 400};
        }
        return chatDb.findByIdUser({id_user})
    }
}