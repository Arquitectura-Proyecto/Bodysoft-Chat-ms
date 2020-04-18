module.exports = function makePostMessage({addMessageTrainer,addMessageUser}) {
    return async function postMessage(req, res) {
        try {
            const { id:_id,id_user, id_trainer } = req.params;

            let { message } = req.body;

            const messageCreated = id_trainer ? await addMessageTrainer({_id,id_trainer,message}) : await addMessageUser({_id,id_user,message});

            //console.log("messageCreated",messageCreated)
            res.status(201).send(messageCreated)

        } catch (error) {
            console.log("error al enviar mensaje")
            res.status(400).send(error.message)
        }
    }
}