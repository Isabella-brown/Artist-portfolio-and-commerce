//const bcrypt = require('bcryptjs')
//const asyncHandler = require('express-async-handler')
const User = require('../models/userModel')
const jwt = require('jsonwebtoken')
//const mongoose = require('mongoose')

const createToken = (_id) => {

    return jwt.sign({ _id }, process.env.SECRET, { expiresIn: '6d' })
}


const loginUser = async (req, res) => {

    const { email, password } = req.body

    try {
        const user = await User.login(email, password)

        const token = createToken(user._id)

        res.status(200).json({ email, token })
    } catch (error) {
        res.status(400).json({ error: error.message })
    }

}


const signupUser = async (req, res) => {

    const { firstName, email, password } = req.body


    try {
        const user = await User.signup(firstName, email, password)

        const token = createToken(user._id)
        res.status(200).json({ email, token })
    } catch (error) {
        res.status(400).json({ error: error.message })
        return
    }

}



module.exports = { signupUser, loginUser }