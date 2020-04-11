const makeStartChat = require('./start-chat')
const chatDb = require('../data-access')

const startChat = makeStartChat({chatDb})

module.exports = startChat;