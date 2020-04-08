const Message = require('../models/Message')

module.exports = {
    get: (params) => {
        return new Promise((resolve, reject) => {
            Message.find(params)
                .then(data => {
                    resolve(data)
                })
                .catch(err =>{
                    reject(err)
                })
        })
    },
    getById: (id) => {
        return new Promise((resolve, reject) => {
            Message.findById(id)
                .then(data => {
                    resolve(data)
                })
                .catch(err =>{
                    reject(new Error('Message ' + id + ' not found'))
                })
        })
    },
    // db.messages.find({userId :"5e8d2b6da35309204ba29854", trainerId :"5e8d2b89a35309204ba2985c" }, {userId: 1, trainerId: 1, content: 1})
    getMessages: (userId, trainerId) => {
        return new Promise((resolve, reject) => {
            Message.find({userId: userId, trainerId: trainerId}, {userId: 1, trainerId: 1, content: 1})
                .then(data => {
                    resolve(data)
                })
                .catch(err =>{
                    reject(new Error('Message ' + id + ' not found'))
                })
        })
    }
    ,

    post: (userId, trainerId, content) => {
        return new Promise((resolve, reject) => {
            Message.create({
                userId : userId,
                trainerId : trainerId,
                content : content
            })
                .then(data => {
                    resolve(data)
                })
                .catch(err =>{
                    reject(err)
                })
        })
    },
    put: (id, params) => {
        return new Promise((resolve, reject) => {
            Message.findByIdAndUpdate(id, params,{new: true})
                .then(data => {
                    resolve(data)
                })
                .catch(err => {
                    reject(err)
                })
        })
    },
    delete: (id, params) => {
        return new Promise((resolve, reject) => {
            Message.findByIdAndRemove(id)
                .then( () => {
                    resolve({id : id})
                })
                .catch(err => {
                    reject(err)
                })
        })
    }
}