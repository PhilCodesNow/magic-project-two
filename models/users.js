const mongoose = require('mongoose');
const {Schema, model} = mongoose;


const userSchema = new Schema({
    username: {type: String, unique: true, required: true},
    password: String,
    notes: Array
})


const User = model('User', userSchema)

module.exports = User;