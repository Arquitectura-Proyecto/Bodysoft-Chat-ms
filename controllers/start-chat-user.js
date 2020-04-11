module.exports = function maketartChatUser({ startChat }) {
    return async function startChatUser(req, res) {
        try {
            const { id_user, id_trainer, } = req.params;
            chat = await startChat({ id_user, id_trainer });
            res.send('Created')
        } catch (error) {
            res.status(500).send(error.message);
        }
    }
}