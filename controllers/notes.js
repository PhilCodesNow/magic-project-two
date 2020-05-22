const express = require('express');

const notesController = express.Router();

const Notes = require('../models/notes.js');


////// Routes

////// Index Route
notesController.get('/', (req, res) =>{
    Notes.find({}, (err, allNotes) =>{
        res.render('Index', {
            notes: allNotes
        })
    })
})

////// New Route
notesController.get('/new', (req, res) =>{
    res.render('New')
})

/////// Create Route
notesController.post('/', (req, res) =>{
    Notes.create(req.body, (err, newNote) =>{
        res.redirect('/');
    })
})

//////// Show Route
notesController.get('/:id', (req, res) =>{
    Notes.findById({_id: req.params.id}, (err, note) =>{
        res.render('Show', {
            note: note
        })
    })
})


module.exports = notesController;