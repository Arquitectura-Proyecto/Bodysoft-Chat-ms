export default function buildMakeChat(){
    return function makeChat({
        id_user,
        id_trainer
    }){
        if(!id_user){
            throw new Error('Chat must have a valid id_user')
        }
        if(!id_trainer){
            throw new Error('Chast must have a valid id_trainer')
        }
    }
}