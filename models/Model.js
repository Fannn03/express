const db = require('../configs/sequelize')

const sequelize = db.sequelize
const datatype = db.datatype

const User = require('./User')(sequelize, datatype)

const syncronize = sequelize.sync()
.then(() => console.log('Table syncronized'))
.catch(error => console.log(error))

const model = {}
model.user = User

module.exports = {
    syncronize,
    model
}