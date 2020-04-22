const Chat = require('../model/Chat');

module.exports = function makeChatDb({ ChatModel }) {
    return Object.freeze({
        findByIdUserIdTrainer,
        insert,
        findByIdUser,
        findByIdTrainer,
        insertMessage,
        findChatById
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
        console.log("INSERT MESSAGE DB",_id,message)
        const chat = await Chat.findById(_id);
        const messagefinal = chat.messages[chat.messages.push(message)-1];
        console.log("message",messagefinal);
        await chat.save();
        return messagefinal
    }

    async function findChatById({_id}){
        //console.log("FIND CHAT BY ID DB",_id);
        const chat = await Chat.findById(_id)
        //console.log("FIND CHAT BY ID DB",chat);
        return chat;
    }
}