const express = require('express')
const router = express.Router()

const UserRouter = require('./UserRouter')

// using version 1
router.use('/v1/users', UserRouter)

module.exports = router