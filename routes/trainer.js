const { Router } = require('express');
const router = Router();//Se crea un objeto de tipo Router() para poder crear rutas

require('../model/connection')

const Chat = require('../model/Chat');

//Obtener los chats de un usuario
router.get(
    '/:id_trainer',
    async (req, res) => {
        const {id_trainer} = req.params;
        const chats = await Chat.find({id_trainer});
        res.json(chats);
    }
)

//Obtener un chat especifico de un usuario con un entrenador
router.get(
    '/:id_trainer/:id_user',
    async(req,res)=>{
        const {id_trainer,id_user} = req.params;
        const chat = await Chat.findOne({id_trainer,id_user})
        res.json(chat);
    }
)

//Iniciar chat con un entrenador
router.post(
    '/:id_trainer/:id_user',
    async (req,res)=>{
        const {id_trainer,id_user,} = req.params;
        if(id_trainer && id_user){
            const chat = new Chat({id_trainer,id_user});
            await chat.save();
            res.send('Created')
        }else{
            res.status(500).send('There was an error')
        }
    }
)

//Enviar un mensaje a un entrenador
router.post(
    '/:id_trainer/:id_user/message',
    async (req,res)=>{
        const {id_trainer,id_user} = req.params;
        const {message} = req.body;
        console.log(req.params,req.body)
        if(id_trainer && id_user && message){
            const chat = await Chat.findOne({id_trainer,id_user});
            message = {...message,id_author:id_trainer}
            chat.messages.push(message);
            await chat.save();
            res.send('Message created')
        }else{
            res.status(500).send('There was an error')
        }
    }
)

module.exports = router;