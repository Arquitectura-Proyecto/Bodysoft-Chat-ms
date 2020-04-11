module.exports = function makePostMessage({addMessage}) {
    return async function postMessage(req, res) {
        try {
            const { id:_id,id_user, id_trainer } = req.params;
            let { message } = req.body;

            console.log("PARAM",req.params,"BODY", req.body)
            console.log({_id,id_user,id_trainer,message})

            const messageCreated = await addMessage({_id,id_user,id_trainer,message})

            res.status(201).send('Message created')
        } catch (error) {
            res.status(500).send(error.message)
        }
    }
}