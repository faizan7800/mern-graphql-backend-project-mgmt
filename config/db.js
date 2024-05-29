const mongoose = require('mongoose')
const color = require('colors')
const connectDB = async ()=>{
    const conn = await mongoose.connect(process.env.MONGO_URL)
    console.log(`Database is Connected to ${conn.connection.host}` );

}

module.exports = connectDB;