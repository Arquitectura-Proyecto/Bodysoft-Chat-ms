const buildMakeChat = require('./chat')
const buildMakeMessage = require('./message')

const makeChat = buildMakeChat();
const makeMessage = buildMakeMessage();

module.exports = {makeChat,makeMessage};