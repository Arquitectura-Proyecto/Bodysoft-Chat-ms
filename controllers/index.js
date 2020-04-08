const TrainerController = require('./TrainerController')
const UserController = require('./UserController')
const MessageController = require('./MessageController')
module.exports = {
    user: UserController,
    trainer: TrainerController,
    message : MessageController
}