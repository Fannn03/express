const mongoose = require('mongoose')

const Schema = mongoose.Schema({
    name: {
        type: {}
    },
    type: String,
    method: String,
    endpoint: String,
}, {
    timestamps: {
        createdAt: 'created_at'
    }
})

const model = mongoose.model('errors', Schema)
module.exports = model