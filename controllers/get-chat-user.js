
module.exports = function makeGetChatUser({listChat}){
    return async function getChatUser(req,res){
        try{
            const { id_user, id_trainer } = req.params;
            const chat = await listChat({ id_user, id_trainer })
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