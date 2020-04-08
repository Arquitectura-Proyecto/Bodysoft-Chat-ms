const User = require('../models/User')
const Message = require('../models/Message')

module.exports = {
    get: (params) => {
        return new Promise((resolve, reject) => {
            User.find(params)
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
            User.findById(id)
                .then(data => {
                    resolve(data)
                })
                .catch(err =>{
                    reject(new Error('User ' + id + ' not found'))
                })
        })
    },
    post: (params) => {
        return new Promise((resolve, reject) => {
            User.create(params)
                .then(data => {
                    resolve(data)
                })
                .catch(err =>{
                    reject(err)
                })
        })
    },
    postMessage: (userId, trainerId, content) => {
        return new Promise((resolve, reject) => {
            Message.create({
                userId : userId,
                trainerId : trainerId,
                content : content,
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
            User.findByIdAndUpdate(id, params,{new: true})
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
            User.findByIdAndRemove(id)
                .then( () => {
                    resolve({id : id})
                })
                .catch(err => {
                    reject(err)
                })
        })
    }
}