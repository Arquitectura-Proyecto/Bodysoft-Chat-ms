const makeStartChat = require('./start-chat')
const makeListChat = require('./list-chat')
const makeListChatsUser = require('./list-chats-user')
const makeListChatsTrainer = require('./list-chats-trainer')
const makeAddMessageTrainer = require('./add-message-trainer')
const makeAddMessageUser = require('./add-message-user')

const chatDb = require('../data-access')

const startChat = makeStartChat({ chatDb })

const listChat = makeListChat({ chatDb })

const listChatsUser = makeListChatsUser({ chatDb })

const listChatsTrainer = makeListChatsTrainer({ chatDb })

const addMessageTrainer = makeAddMessageTrainer({ chatDb });

const addMessageUser = makeAddMessageUser({ chatDb });

module.exports = { startChat, listChat, listChatsUser, listChatsTrainer, addMessageTrainer, addMessageUser };
