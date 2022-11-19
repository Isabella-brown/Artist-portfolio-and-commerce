const bcrypt = require('bcryptjs')
const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')
const jwt = require('jsonwebtoken')

const createToken = (_id) => {

    return jwt.sign({ _id }, process.env.SECRET, { expiresIn: '6d' })
}


const loginUser = async (req, res) => {
    res.json({ mssg: 'login user' })
}


const signupUser = async (req, res) => {

    const { firstName, email, password } = req.body
    const token = createToken(User._id)

    try {
        const user = await User.signup(firstName, email, password)
        res.status(200).json({ email, token })
    } catch (error) {
        res.status(400).json({ error: error.message })
        return
    }

    res.json({ messg: 'signup user' })
}



module.exports = { signupUser, loginUser }