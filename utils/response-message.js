const ResponseSchema = require('../schemas/ResponseSchema')

module.exports = async ({req, res, statusCode, message, data = null}) => {

    if(statusCode === 200) {

        res.status(statusCode).json({
            result: 'success',
            message: message,
            data: data
        })

        const response = new ResponseSchema({
            message: message,
            type: 'success',
            method: req.method,
            endpoint: req.originalUrl
        })

        return await response.save()

    }

    if(statusCode === 400) {

        res.status(statusCode).json({
            result: 'error',
            message: message
        })

        const response = new ResponseSchema({
            message: message,
            type: 'bad request',
            method: req.method,
            endpoint: req.originalUrl
        })

        return await response.save()

    }

    if(statusCode === 404) {

        res.status(statusCode).json({
            result: 'error',
            message: message
        })

        const response = new ResponseSchema({
            message: message,
            type: 'not found',
            method: req.method,
            endpoint: req.originalUrl
        })

        return await response.save()

    }

    else throw new Error('Unknown status code', statusCode)

}