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


////// Delete Route
notesController.delete('/:id', (req, res) =>{
    Notes.findOneAndDelete({_id: req.params.id}, (err, note) =>{
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

////// Edit Route
notesController.get('/:id/edit', (req, res) =>{
    Notes.findById({_id: req.params.id}, (err, note) =>{
        res.render('Edit', {
            note: note
        })
    })
})

/////// Update Route
notesController.put('/:id/edit', (req, res) =>{
    Notes.findByIdAndUpdate(req.params.id, req.body, (err, data) =>{
        res.redirect(`/${req.params.id}`);
    })
})


module.exports = notesController;