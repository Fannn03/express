const db = require('../config/sequelize')
require('dotenv').config()
const env = process.env

const sequelize = db.sequelize
const datatype = db.datatype

const User = require('./User')(sequelize, datatype)

let forceSync
(env.APP == 'testing') ? forceSync = true : forceSync = false

const model = {}
model.user = User

module.exports = model