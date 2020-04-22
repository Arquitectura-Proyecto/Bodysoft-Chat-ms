const { Router } = require('express');
const router = Router();//Se crea un objeto de tipo Router() para poder crear rutas

require('../data-access/connection')

const Chat = require('../model/Chat');

const {startChatUser, getChatUser,getChatsUser,postMessage} = require('../controllers/index.js')

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
    '/:id_user',
    startChatUser
)

//Enviar un mensaje a un entrenador
router.post(
    '/:id_user/:id',
    postMessage
)

module.exports = router;