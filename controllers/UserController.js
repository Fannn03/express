const Model = require('../models/Model').model
const User = Model.user

module.exports = {
    get: async (req, res) => {

        let number

        if(!req.query.page || req.query.page == 1) number = 0
        else number = parseInt(req.query.page)

        const users = await User.findAll({offset: number * 50, limit: 50})

        if(!users.length) return res.status(404).json({
            result: 'error',
            data: 'Data not found'
        })

        return res.json({
            result: 'success',
            data: users
        })

    },
    create: async (req, res) => {

        const {username, firstname, lastname} = req.body

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

            return res.status(400).json({
                result: 'error',
                messages: messages
            })
        }

        return res.json({
            result: 'success',
            messages: 'Data berhasil di buat!'
        })

    },
    details: async (req, res) => {
        
        const username = req.params.username
        const user = await User.findOne({
            where: {
                username: username
            }
        })

        if(!user) return res.status(404).json({
            result: 'error',
            messages: 'Username not found'
        })

        else return res.json({
            result: 'success',
            data: user
        })

    }
}