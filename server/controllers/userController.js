const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')


const loginUser = async (req, res) => {
    res.json({ mssg: 'login user' })
}


const signupUser = async (req, res) => {

    const { firstName, email, password } = req.body

    try {
        const user = await User.signup(firstName, email, password)
        res.status(200).json({ email, user })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }

    res.json({ messg: 'signup user' })
}



module.exports = { signupUser, loginUser }