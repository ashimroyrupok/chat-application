const mongoose = require('mongoose');


const connectDB = (uri) => {
    mongoose.connect(uri,{
        dbName:"chat-application"})
        .then(data => {
            console.log(`Connected to db ${data.connection.host}`)
        })
        .catch(err => {
            throw err
        })
}

module.exports = connectDB