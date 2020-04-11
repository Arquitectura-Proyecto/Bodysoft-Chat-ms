const makeStartChat = require('./start-chat')
const makeListChat = require('./list-chat')
const makeListChatsUser = require('./list-chats-user')
const makeListChatsTrainer = require('./list-chats-trainer')

const chatDb = require('../data-access')

const startChat = makeStartChat({ chatDb })

const listChat = makeListChat({ chatDb })

const listChatsUser = makeListChatsUser({ chatDb })

const listChatsTrainer = makeListChatsTrainer({ chatDb })

module.exports = { startChat, listChat, listChatsUser, listChatsTrainer };