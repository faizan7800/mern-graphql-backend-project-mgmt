const mongoose = require('mongoose')
const color = require('colors')
const connectDB = async ()=>{
    const conn = await mongoose.connect("mongodb+srv://faizankhan:faizan123@cluster0.vapryi3.mongodb.net/mgmt_app?retryWrites=true&w=majority&appName=Cluster0")
    console.log(`Database is Connected to ${conn.connection.host}` );

}

module.exports = connectDB;