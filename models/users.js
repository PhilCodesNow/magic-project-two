const mongoose = require('mongoose');
const {Schema, model} = mongoose;



const userSchema = new Schema({
    username: {type: String, unique: true, required: true},
    password: String
})

const User = model('UserCollection', userSchema);


module.exports = User;