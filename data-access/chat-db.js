module.exports = function makeChatDb({ ChatModel }) {
    return Object.freeze({
        findByIdUserIdTrainer,
        insert,
        findByIdUser,
        findByIdTrainer
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

}