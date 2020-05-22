const express = require('express');

const notesController = express.Router();

const Note = require('../models/notes.js');


////// Routes

////// Index Route
notesController.get('/', (req, res) =>{
    res.render('Index');
})

////// New Route
notesController.get('/new', (req, res) =>{
    res.render('New')
})





module.exports = notesController;