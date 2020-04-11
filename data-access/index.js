const ChatModel = require('../model/Chat');
const makeChatDb = require('./chat-db')

require('./connection')

const chatDb = makeChatDb({ChatModel})

module.exports = chatDb;