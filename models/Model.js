const db = require('../config/sequelize')
require('dotenv').config()
const env = process.env

const sequelize = db.sequelize
const datatype = db.datatype

const User = require('./User')(sequelize, datatype)

let forceSync
(env.APP == 'testing') ? forceSync = true : forceSync = false

const syncronize = sequelize.sync({force: forceSync})
.then(() => console.log('Table syncronized'))
.catch(error => console.log(error))

const model = {}
model.user = User

module.exports = {
    syncronize,
    model
}