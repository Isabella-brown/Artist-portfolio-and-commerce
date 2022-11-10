const express = require('express');
const app = express();
const mongoose = require("mongoose");

app.get('/api', (req, res) => {

    res.json({ "users": ["one", "two", "three"] })

})

const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`))

