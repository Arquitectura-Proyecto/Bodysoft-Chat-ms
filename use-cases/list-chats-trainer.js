module.exports = function makeListChatsUser({chatDb}){
    return function listChatsUser({id_trainer}){
        if(!id_trainer){
            throw {data: 'You must supply a trainer id', status : 400};
        }
        return chatDb.findByIdTrainer({id_trainer})
    }
}