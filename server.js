//// Dependencies
const express = require('express');
const app = express();
///// import mongoose
const mongoose = require('mongoose');
///// import notes model
const Notes = require('./models/notes.js')
///////// set port
const port = process.env.PORT || 3000;
require('dotenv').config();
const DBURL = process.env.MONGODB_URI;
//////// Import controllers
const notesController = require('./controllers/notes.js');
const userController = require('./controllers/users.js');
////// Import Method Override
const methodOverride = require('method-override');
//////// set bcrypt
const bcrypt = require('bcrypt');
////// require session
const session = require('express-sessions');



////// Database Connection
mongoose.connect(DBURL, {useNewUrlParser: true, useUnifiedTopology: true})
mongoose.connection.once('open', () =>{
    console.log('connected to mongo')
})


////// Middleware
app.use(express.urlencoded({extended: true}));
////// Sets static folder to 'public'
app.use(express.static('public'));
/////// sets view engine to jsx
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
////// sets keyword for method override
app.use(methodOverride('_method'));


/////controllers
app.use('/', notesController);
app.use('/user', userController);



//////Listener
app.listen(port, ()=>{
    console.log('listening on port ' + port)
})

