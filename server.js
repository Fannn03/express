const app = require('./main')

require('dotenv').config()
const env = process.env

const Model = require('./models/Model')

app.listen(env.SERVER_PORT, () => {
    Model.syncronize
    console.log(`Server running on port ${env.SERVER_PORT}`);
})