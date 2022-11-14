const mongoose = require('mongoose')

const { Schema } = mongoose;

const UserSchema = new Schema({

    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        index: {
            unique: true
        }
    }

})