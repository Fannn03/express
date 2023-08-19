const Model = require('../models/Model').model
const User = Model.user

module.exports = {
    get: async (req, res) => {

        const users = await User.findAll()

        return res.json({
            result: 'success',
            data: users
        })

    },
    create: async (req, res) => {

        const {username, firstname, lastname} = req.body
        console.log(firstname);
        try{
            await User.create({
                username: username,
                firstname: firstname,
                lastname: lastname
            })
        }catch(error){
            let messages = {}

            error.errors.map(error => {
                messages[error.path] = error.message
            })

            return res.json({
                result: 'error',
                messages: messages
            })
        }

        return res.json({
            result: 'success',
            messages: 'Data berhasil di buat!'
        })

    }
}