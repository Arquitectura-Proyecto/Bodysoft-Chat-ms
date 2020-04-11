
module.exports = function makeGetChatUser({listChatsUser}){
    return async function getChatUser(req,res){
        try{
            const { id_user } = req.params;
            const chat = await listChatsUser({ id_user})
            res.json(chat);   
        }catch(error){
            res.status(500).send(error.message);
        }
    }
}

