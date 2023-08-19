const express = require('express')
const app = express()

require('dotenv').config()
const env = process.env

app.get('/', (req, res) => {
    res.send('hello world')
})

app.listen(env.SERVER_PORT, () => {
    console.log(`Server running on port ${env.SERVER_PORT}`);
})