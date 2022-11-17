require('dotenv').config()

const express = require('express');
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require("body-parser");



const uri = process.env.MONGO_URI

const connectDB = require('./config/db')

const userRoutes = require('./routes/userRoutes')


connectDB()

const app = express();
app.use(express.json())
app.use(cors({
    origin: "http://localhost:3000"
}))



/*
app.get('/', (req, res) => {

})
*/





app.use('/api', userRoutes)


const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`))







/*
app.get("/api", (req, res) => {

    res.send([{
        id: 1,
        name: 'John Doe',
        age: 32
    },
    {
        id: 2,
        name: 'Jane Doe',
        age: 30
    }
    ])



})*/
