//// Dependencies
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const port = process.env.PORT || 3000;
require('dotenv').config();
const DBURL = process.env.MONGODB_URI;

////// Database Connection
mongoose.connect(DBURL, {}, (err) =>{
    console.log(err? err : 'connected')
})


////// Middleware
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));

////// Routes
app.get('/', (req, res) =>{
    res.send('Hello World')
})
//////Listener
app.listen(port, ()=>{
    console.log('listening on port ' + port)
})

