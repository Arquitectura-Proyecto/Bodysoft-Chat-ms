const Trainer = require('../models/Trainer')
const Message = require('../models/Message')
module.exports = {
    get: (params) => {
        return new Promise((resolve, reject) => {
            Trainer.find(params)
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
            Trainer.findById(id)
                .then(data => {
                    resolve(data)
                })
                .catch(err =>{
                    reject(new Error('Team ' + id + ' not found'))
                })
        })
    },
    post: (params) => {
        return new Promise((resolve, reject) => {
            Trainer.create(params)
                .then(data => {
                    resolve(data)
                })
                .catch(err =>{
                    reject(err)
                })
        })
    },
    postMessage: (trainerId, userId, content) => {
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
            Trainer.findByIdAndUpdate(id, params,{new: true})
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
            Trainer.findByIdAndRemove(id)
                .then( () => {
                    resolve({id : id})
                })
                .catch(err => {
                    reject(err)
                })
        })
    }
}