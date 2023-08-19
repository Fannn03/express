const express = require('express')
const app = express()

require('dotenv').config()
const env = process.env

const ApiRouter = require('./routers/ApiRouter')

app.use('/api', ApiRouter)

app.listen(env.SERVER_PORT, () => {
    console.log(`Server running on port ${env.SERVER_PORT}`);
})