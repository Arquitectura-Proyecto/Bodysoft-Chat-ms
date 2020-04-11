const makeStartChatUser = require('./start-chat-user');
const makeGetChatUser = require('./get-chat-user');
const makeGetChatsUser = require('./get-chats-user')
const makeGetChatsTrainer = require('./get-chats-trainer')

const {startChat,listChat,listChatsUser,listChatsTrainer} = require('../use-cases');

const startChatUser = makeStartChatUser({startChat});

const getChatUser = makeGetChatUser({listChat});

const getChatsUser = makeGetChatsUser({listChatsUser})

const getChatsTrainer = makeGetChatsTrainer({listChatsTrainer})

module.exports = {startChatUser,getChatUser,getChatsUser,getChatsTrainer}