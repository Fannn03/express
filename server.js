const mongoose = require('./config/mongoose')
const express = require('./main')

const app = express.app

require('dotenv').config()
const env = process.env

app.listen(env.SERVER_PORT, async () => {
    await express.Model.syncronize
    await mongoose()
    console.log(`Server running on port ${env.SERVER_PORT}`);
})