const ResponseSchema = require('../schemas/ResponseSchema')

module.exports = async ({req, res, statusCode, message, data = null}) => {

    if(statusCode === 200) {

        res.status(statusCode).json({
            result: 'success',
            message: message,
            data: data
        })

        const response = new ResponseSchema({
            name: message,
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
            name: message,
            type: 'bad request',
            method: req.method,
            endpoint: req.originalUrl
        })
        console.log(response);
        return await response.save()

    }

    else throw new Error('Unknown status code', statusCode)

}