const mongoose = require('mongoose');

const mongooseUri = "mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false"; // connect to mongo server

const connectToMongo = () =>{
    mongoose.connect(mongooseUri , () =>{
        console.log("Connected to Mongo database");
    })
}

module.exports = connectToMongo;