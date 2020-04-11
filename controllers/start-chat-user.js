module.exports = function maketartChatUser({ startChat }) {
    return async function startChatUser(req, res) {
        try {
            const bodyAndParams = {...req.params,...req.body}
            const { id_user,id_trainer } = bodyAndParams;
            
            await startChat({ id_user, id_trainer });
            res.status(201).send('Created chat user')
        } catch (error) {
            res.status(500).send(error.message);
        }
    }
}