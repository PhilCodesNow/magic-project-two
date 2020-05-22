const bcrypt = require('bcrypt');
const express = ('express');
const users = express.Router();

const Users = require('../models/users.js');

users.get('/new', (req, res) =>{
    res.render('newUser.jsx')
})

users.post('/', (req, res) =>{
    req.body.password = bcrypt.hashSync(req.body.password, bcrypt.getSaltSync(10));

    console.log(req.body)

    Users.create(req.body, (err, createdUser) =>{
        console.log(createdUser)
        res.redirect('/')
    })
})

module.exports = users;