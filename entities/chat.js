module.exports =  function buildMakeChat(){
    return function makeChat({
        id_user,
        id_trainer
    }){
        console.log(id_user,id_trainer)
        if(!id_user){
            throw {data:"Chat must have a valid id_user", status : 400};
        }
        if(!id_trainer){
            throw {data:"Chat must have a valid id_trainer", status : 400};

        }
        return Object.freeze({
            id_user,
            id_trainer
        })
    }
}
