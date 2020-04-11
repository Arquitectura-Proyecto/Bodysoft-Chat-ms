module.exports = function makeListChatsUser({chatDb}){
    return function listChatsUser({id_trainer}){
        if(!id_trainer){
            throw new Error('You must supply a trainer id')
        }
        return chatDb.findByIdTrainer({id_trainer})
    }
}