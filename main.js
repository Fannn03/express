const express = require('express')
const bodyParser = require('body-parser')
const app = express()

const ApiRouter = require('./routers/ApiRouter')

// using body parser
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.use('/api', ApiRouter)

module.exports = app