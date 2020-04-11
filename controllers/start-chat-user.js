module.exports = function maketartChatUser({ startChat }) {
    return async function startChatUser(req, res) {
        try {
            const { id_user, id_trainer, } = req.params;
            await startChat({ id_user, id_trainer });
            res.status(201).send('Created chat user')
        } catch (error) {
            res.status(500).send(error.message);
        }
    }
}