module.exports = function makePostMessage({addMessageTrainer,addMessageUser}) {
    return async function postMessage(req, res) {
        try {
            const { id:_id,id_user, id_trainer } = req.params;

            let { message } = req.body;

            const messageCreated = id_trainer ? await addMessageTrainer({_id,id_trainer,message}) : await addMessageUser({_id,id_user,message});

            //console.log("messageCreated",messageCreated)
            res.status(201).send(messageCreated)

        } catch (error) {
            console.log(error);
            if(error.status && error.data){
                res.status(error.status).send(error.data);
            }else{
                res.status(500).send(error.message);
            }
        }
    }
}