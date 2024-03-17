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
        required: true,
        minlength: 8
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
    },
    gender:{
        type: String,
        enum: ['male', 'female']
    },
    profileImgURL:{
        type: String,
        default: 'https://avatar.iran.liara.run/public/17'
    },
}, { timestamps: true })

const User = model('User', userSchema)

module.exports = User

