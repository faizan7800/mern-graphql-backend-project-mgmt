const express = require('express')
require('dotenv').config()
const { graphqlHTTP } = require('express-graphql')
const { createHandler } = require('graphql-http/lib/use/express')
const schema = require("./schemas/schema")
const connectDB = require('./config/db')
const PORT = 5000;
const cors = require('cors')

const app = express()
app.use(cors())

// Databse connection

connectDB();

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true // for production it will be 'true' just
}))

app.listen(PORT, console.log(`Server is running on PORT ${PORT}`))