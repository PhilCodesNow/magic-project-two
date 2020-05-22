//// Dependencies
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const port = process.env.PORT || 3000;
require('dotenv').config();
const DBURL = process.env.MONGODB_URI;

////// Database Connection
mongoose.connect(DBURL, {useNewUrlParser: true, useUnifiedTopology: true}, (err) =>{
    console.log(err? err : 'connected')
})


////// Middleware
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());


////// Routes

////// Index Route
app.get('/', (req, res) =>{
    res.render('Index');
})

////// New Route
app.get('/new', (req, res) =>{
    res.render('New')
})
//////Listener
app.listen(port, ()=>{
    console.log('listening on port ' + port)
})

