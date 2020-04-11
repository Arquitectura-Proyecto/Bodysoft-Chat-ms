module.exports = function makeListChat({chatDb}){
    return function listChat({id_user,id_trainer}){
        if(!id_user){
            throw new Error('You must supply a user id')
        }
        if(!id_trainer){
            throw new Error('You must supply a trainer id')
        }
        return chatDb.findByIdUserIdTrainer({id_user,id_trainer})
    }
}