const { Router } = require('express');
const router = Router();//Se crea un objeto de tipo Router() para poder crear rutas

const Chat = require('../model/Chat');

const {startChatUser,getChatUser,getChatsTrainer,postMessage} = require('../controllers/index.js')

//Obtener los chats de un entrenador
router.get(
    '/:id_trainer',
    getChatsTrainer
)

//Obtener un chat especifico de un entrenador con un usuario
router.get(
    '/:id_trainer/:id_user',
    getChatUser
)

//Iniciar chat con un usuario
router.post(
    '/:id_trainer/:id_user',
    startChatUser
)

//Enviar un mensaje a un usuario
router.post(
    '/:id_trainer/:id_user/message',
    postMessage
)

module.exports = router;