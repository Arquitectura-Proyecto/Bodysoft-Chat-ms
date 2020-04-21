module.exports = function makeListChat({chatDb}){
    return function listChat({id_user,id_trainer}){
        if(!id_user){
            throw {data: 'You must supply a user id', status : 400};
        }
        if(!id_trainer){
            throw {data: 'You must supply a trainer id', status : 400};
        }
        return chatDb.findByIdUserIdTrainer({id_user,id_trainer})
    }
}