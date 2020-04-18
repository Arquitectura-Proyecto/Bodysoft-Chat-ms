module.exports = function buildMakeMessage() {
    return function makeMessage({
        _id,
        id_user,
        id_trainer,
        message,
    }) {
        
        if (!_id) {
            throw new Error('Message must have a valid _id')
        }
        const {id_author,content} = message;

        if(!id_author){
            throw new Error('Message must have a valid id_author')
        }

        if(id_author != id_user && id_author != id_trainer){
            throw new Error('The author does not exist in this chat')
        }
        
        if(!content || content.length < 1){
            throw new Error('The content of the message must have at least one character')
        }

        message = {id_author,content}

        ///console.log("MESSAGE ENTITY",message)

        return Object.freeze({
            _id,
            message
        })
    }
}
