const express = require('express')
const bodyParser = require('body-parser')
const app = express()

require('dotenv').config()
const env = process.env

const ApiRouter = require('./routers/ApiRouter')
const Model = require('./models/Model')

// using body parser
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.use('/api', ApiRouter)

app.listen(env.SERVER_PORT, () => {
    Model.syncronize
    console.log(`Server running on port ${env.SERVER_PORT}`);
})