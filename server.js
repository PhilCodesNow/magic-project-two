//// Dependencies
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const port = process.env.PORT || 3000;
require('dotenv').config();
const DBURL = process.env.MONGODB_URI;
//////// Import controllers
const notesController = require('./controllers/notes.js');

////// Database Connection
mongoose.connect(DBURL, {useNewUrlParser: true, useUnifiedTopology: true}, (err) =>{
    console.log(err? err : 'connected')
})


////// Middleware
app.use(express.urlencoded({extended: true}));
////// Sets static folder to 'public'
app.use(express.static('public'));
/////// sets view engine to jsx
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

/////controllers
app.use('/', notesController);



//////Listener
app.listen(port, ()=>{
    console.log('listening on port ' + port)
})

