const { Router } = require('express');
const router = Router();//Se crea un objeto de tipo Router() para poder crear rutas

require('../data-access/connection')

const Chat = require('../model/Chat');

const {startChatUser, getChatUser,getChatsUser} = require('../controllers/index.js')

//Obtener los chats de un usuario
router.get(
    '/:id_user',
    getChatsUser
)

//Obtener un chat especifico de un usuario con un entrenador
router.get(
    '/:id_user/:id_trainer',
    getChatUser
)

//Iniciar chat con un entrenador
router.post(
    '/:id_user/:id_trainer',
    startChatUser
)

//Enviar un mensaje a un entrenador
router.post(
    '/:id_user/:id_trainer/message',
    async (req, res) => {
        const { id_user, id_trainer } = req.params;
        let { message } = req.body;
        console.log(req.params, req.body)
        if (id_user && id_trainer && message) {
            const chat = await Chat.findOne({ id_user, id_trainer });
            console.log(chat);
            message = { ...message, id_author: id_user }
            chat.messages.push(message);
            await chat.save();
            res.send('Message created')
        } else {
            res.status(500).send('There was an error')
        }
    }
)

module.exports = router;