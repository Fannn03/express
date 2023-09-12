const responseMessage = require('../utils/response-message')
const Model = require('../models/Model')
const User = Model.user

module.exports = {
    get: async (req, res) => {

        let number

        if(!req.query.page || req.query.page == 1) number = 0
        else number = parseInt(req.query.page)

        const users = await User.findAll({offset: number * 50, limit: 50})

        if(!users.length) return responseMessage({
            req: req,
            res: res,
            statusCode: 400,
            message: "Username cannot be null"
        })

        return responseMessage({
            req: req,
            res: res,
            statusCode: 200,
            message: "Sucessfully get all users data",
            data: users
        })

    },
    create: async (req, res) => {

        const {username, email, password, firstname, lastname} = req.body

        try{
            await User.create({
                username: username,
                email: email,
                password: password,
                firstname: firstname,
                lastname: lastname
            })
        }catch(error){
            let messages = {}

            error.errors.map(error => {
                messages[error.path] = error.message
            })

            return responseMessage({
                req: req,
                res: res,
                statusCode: 400,
                message: messages
            })
        }

        return responseMessage({
            req: req,
            res: res,
            statusCode: 200,
            message: "Record successfully created",
        })

    },
    details: async (req, res) => {
        
        const username = req.params.username
        const user = await User.findOne({
            where: {
                username: username
            }
        })

        if(!user) return responseMessage({
            req: req,
            res: res,
            statusCode: 404,
            message: "User is not found"
        })

        return responseMessage({
            req: req,
            res: res,
            statusCode: 200,
            message: "Successfully get details user",
            data: user
        })

    }
}