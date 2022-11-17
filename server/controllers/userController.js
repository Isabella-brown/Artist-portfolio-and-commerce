const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')


const loginUser = async (req, res) => {
    res.json({ mssg: 'login user' })
}


const signupUser = async (req, res) => {
    res.json({ messg: 'signup user' })
}



module.exports = { signupUser, loginUser }