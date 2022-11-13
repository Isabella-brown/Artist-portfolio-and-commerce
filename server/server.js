const express = require('express');
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require("body-parser");

const app = express()

app.use(cors({
    origin: "http://localhost:3000"
}))



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


    //res.json({ "users": ["one", "two", "three"] })

})

const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`))

