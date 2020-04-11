
module.exports = function makeGetChatUser({ listChatsTrainer }) {
    return async function getChatUser(req, res) {
        try {
            const { id_trainer } = req.params;
            const chat = await listChatsTrainer({ id_trainer })
            res.status(200).json(chat);
        } catch (error) {
            res.status(500).send(error.message);
        }
    }
}

