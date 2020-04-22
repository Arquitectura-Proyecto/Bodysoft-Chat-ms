module.exports = function buildMakeMessage() {
    return function makeMessage({
        _id,
        id_user,
        id_trainer,
        message,
    }) {
        
        if (!_id) {
            throw {data:"Message must have a valid _id", status : 400};
        }
        const {id_author,content} = message;

        if(!id_author){
            throw {data: "Message must have a valid id_author", status : 400};
        }

        if(id_author != id_user && id_author != id_trainer){
            throw {data: "The author does not exist in this chat", status : 400};
        }
        
        if(!content || content.length < 1){
            throw {data: "The content of the message must have at least one character", status : 400};
        }

        message = {id_author,content}

        ///console.log("MESSAGE ENTITY",message)

        return Object.freeze({
            _id,
            message
        })
    }
}
