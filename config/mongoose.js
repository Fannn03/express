const mongoose = require('mongoose')
require('dotenv').config()
const env = process.env

module.exports = async () => {
    try{
        console.log('Connecting to mongodb...');
        await mongoose.connect(`${env.MONGO_HOST}${env.MONGO_COLLECTION}`)
        console.log('Connected to mongodb.');
    }catch(error){
        console.log('Error while connecting to mongodb :');
        throw new Error(error.message)
    }
}