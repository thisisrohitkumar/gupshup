const { Schema, model} = require('mongoose')

const userSchema = new Schema({
    fullname : {
        type: String
    },
    email : {
        type: String, 
        required: true,
        unique: true
    },
    password : {
        type: String,
        required: true
    },
    rollno: {
        type: String,
        unique: true
    },
    course: {
        type: String
    },
    bio:{
        type: String
    }
}, { timestamps: true })

const user = model('user', userSchema)

module.exports = user

