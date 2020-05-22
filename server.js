//// Dependencies
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
require('dotenv').config();

////// Database Connection


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

