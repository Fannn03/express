const express = require('./main')

const app = express.app

require('dotenv').config()
const env = process.env

app.listen(env.SERVER_PORT, () => {
    express.Model.syncronize
    console.log(`Server running on port ${env.SERVER_PORT}`);
})