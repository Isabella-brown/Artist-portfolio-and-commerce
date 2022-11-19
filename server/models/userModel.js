const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const validator = require('validator')

const userSchema = mongoose.Schema(
    {
        firstName: {
            type: String,
            required: [true, 'Please add a name'],
        },
        email: {
            type: String,
            required: [true, 'Please add an email'],
            unique: true,
        },
        password: {
            type: String,
            required: [true, 'Please add a password'],
        },
    },
    {
        timestamps: true,
    }
)

userSchema.statics.signup = async function (firstName, email, password) {

    if (!email || !password) {
        throw Error('Email or password is missing')
    }
    if (!validator.isEmail(email)) {
        throw Error('Please enter a valid email')
    }
    if (!validator.isStrongPassword(password)) {
        throw Error('Password not strong enough')
    }


    const exists = await this.findOne({ email })

    if (exists) {
        throw Error('Email already in use')
    }

    const salt = await bcrypt.genSalt(10)
    const hashPass = await bcrypt.hash(password, salt)

    const user = await this.create({ firstName, email, password: hashPass })

    return user
}

module.exports = mongoose.model('User', userSchema)