const makeStartChatUser = require('./start-chat-user');
const makeGetChatUser = require('./get-chat-user');
const makeGetChatsUser = require('./get-chats-user')
const makeGetChatsTrainer = require('./get-chats-trainer')
const makePostMessage = require('./post-message')

const {startChat,listChat,listChatsUser,listChatsTrainer,addMessage} = require('../use-cases');

const startChatUser = makeStartChatUser({startChat});

const getChatUser = makeGetChatUser({listChat});

const getChatsUser = makeGetChatsUser({listChatsUser})

const getChatsTrainer = makeGetChatsTrainer({listChatsTrainer})

const postMessage = makePostMessage({addMessage})

module.exports = {startChatUser,getChatUser,getChatsUser,getChatsTrainer,postMessage}