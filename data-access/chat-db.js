const Chat = require('../model/Chat');

module.exports = function makeChatDb({ ChatModel }) {
    return Object.freeze({
        findByIdUserIdTrainer,
        insert,
        findByIdUser,
        findByIdTrainer,
        insertMessage
    })
    async function findByIdUserIdTrainer({ id_user, id_trainer }) {
        return await ChatModel.findOne({ id_user, id_trainer });
    }
    async function insert({ id_user, id_trainer }) {
        const chat = new ChatModel({ id_user, id_trainer });
        return await chat.save();
    }
    async function findByIdUser({id_user}){
        return await ChatModel.find({id_user});
    }

    async function findByIdTrainer({id_trainer}){
        return await ChatModel.find({id_trainer});
    }

    async function insertMessage({_id,message}){
        console.log(_id)
        const chat = await Chat.findById(_id);
        console.log(chat);
        chat.messages.push(message);
        return await chat.save();
    }
}