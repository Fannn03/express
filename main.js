const express = require('express')
const bodyParser = require('body-parser')
const app = express()

const ApiRouter = require('./routers/ApiRouter')

const Model = require('./models/Model')

// using body parser
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.use('/api', ApiRouter)

module.exports = {
    app,
    Model
}