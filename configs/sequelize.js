const { Sequelize, DataTypes } = require('sequelize')
require('dotenv').config()
const env = process.env

const sequelize = new Sequelize(env.DB_DATABASE, env.DB_USERNAME, env.DB_PASSWORD, {
    dialect: 'mysql',
    host: env.DB_HOST,
    logging: false
})

sequelize.authenticate()
.catch(error => console.log(error))

const db = {}
db.sequelize = sequelize
db.datatype = DataTypes

module.exports = db