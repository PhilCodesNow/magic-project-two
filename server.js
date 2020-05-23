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
/////// session
const session = require('express-sessions');
//////// set bcrypt
const bcrypt = require('bcrypt');
const User = require('./models/users.js')



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
///// session config 
// app.use(session({
//     secret: process.env.SECRET,
//     resave: false,
//     saveUninitialized: false
// }))
////// sets keyword for method override
app.use(methodOverride('_method'));



/////controllers
app.use('/', notesController);
app.use('/user', userController);



////// authorization routes
app.get('/sessions/new', (req, res) =>{
    res.render('sessions/new', {
        currentUser: req.session.currentUser
    })
})


/////// Authentication Route, login
app.post('/sessions/', (req, res) =>{
    User.findOne({username: req.body.username}, (err, foundUser) =>{
        if(err){
            res.send(err)
        }else if(!foundUser){
            res.redirect('/user/new')
        }else{
            if(bcrypt.compareSync(req.body.password, foundUser.password)){
                req.session.currentUser = foundUser.username
                res.redirect('/')
            }else{
                res.send('Wrong Password')
            }
        }
    })
})


app.delete('/sessions/', (req, res) =>{
    req.sessions.destroy(()=>{
        res.redirect('/sessions/new')
    })
})
//////Listener
app.listen(port, ()=>{
    console.log('listening on port ' + port)
})

