module.exports = function makeChatDb({ ChatModel }) {
    return Object.freeze({
        findByIdUserIdTrainer,
        insert
    })
    async function findByIdUserIdTrainer({ id_user, id_trainer }) {
        return await ChatModel.findOne({ id_user, id_trainer });
    }
    async function insert({ id_user, id_trainer }) {
        const chat = new ChatModel({ id_user, id_trainer });
        return await chat.save();
    }
}