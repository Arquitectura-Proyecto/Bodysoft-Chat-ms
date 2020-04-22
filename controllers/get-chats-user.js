
module.exports = function makeGetChatUser({listChatsUser}){
    return async function getChatUser(req,res){
        try{
            const { id_user } = req.params;
            const chat = await listChatsUser({ id_user})
            res.status(200).json(chat);   
        }catch(error){
            if(error.status && error.data){
                res.status(error.status).send(error.data);
            }else{
                res.status(500).send(error.message);
            }
        }
    }
}

