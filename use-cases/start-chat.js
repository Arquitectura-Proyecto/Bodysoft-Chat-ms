const makeChat = require('../entities')

module.exports =  function makeStartChat({chatDb}){
    return async function startChat(chatInfo){
        const chat = makeChat(chatInfo);
        const exist = await chatDb.findByIdUserIdTrainer({id_user:chatInfo.id_user,id_trainer:chatInfo.id_trainer});
        console.log('exist',exist)
        if(exist){
            return exist
        }
        return chatDb.insert({id_user:chat.id_user,id_trainer:chat.id_trainer})
    }
}