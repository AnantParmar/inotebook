const mongoose = require('mongoose');

const mongoURI = "mongodb://localhost:27017/?readPreference=primary&directConnection=true&tls=false";

const connectToMongo = ()=>{
    mongoose.connect(mongoURI)
}

module.exports = connectToMongo;
