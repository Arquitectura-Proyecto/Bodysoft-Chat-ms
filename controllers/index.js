const makeStartChatUser = require('./start-chat-user');
const startChat = require('../use-cases');

const startChatUser = makeStartChatUser({startChat});

module.exports = startChatUser