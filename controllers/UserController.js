const Model = require('../models/Model').model
const User = Model.user

module.exports = {
    get: async (req, res) => {

        const users = await User.findAll()

        return res.send(users)

    }
}