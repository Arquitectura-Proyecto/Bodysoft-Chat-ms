module.exports = function maketartChatUser({ startChat }) {
    return async function startChatUser(req, res) {
        try {
            const bodyAndParams = {...req.params,...req.body}
            const { id_user,id_trainer } = bodyAndParams;
            
            const chat = await startChat({ id_user, id_trainer });

            res.status(201).send(chat)
        } catch (error) {
            if(error.status && error.data){
                res.status(error.status).send(error.data);
            }else{
                res.status(500).send(error.message);
            }
        }
    }
}