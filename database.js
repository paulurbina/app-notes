const mongoose = require('mongoose')

const string_connection = process.env.DB_CONNECTION
const config_connection_mongo = {
    useUnifiedTopology: true,
    useNewUrlParser: true
}

const connect_with_mongo = mongoose.connect(
    string_connection, config_connection_mongo)
if (connect_with_mongo) console.log('Database connecting')


