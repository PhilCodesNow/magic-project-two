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
const session = require('express-session');
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
app.use(
    session({
        secret: process.env.SECRET,
        resave: false,
        saveUninitialized: false,
    })
);
////// sets keyword for method override
app.use(methodOverride('_method'));



/////controllers
app.use('/', notesController);
app.use('/user', userController);



////// authorization routes
app.get('/sessions/newSession', (req, res) =>{
    res.render('sessions/newSession.jsx', {
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
                console.log(foundUser)
                req.session.currentUser = foundUser.username
                res.redirect(`/sessions/${foundUser._id}/notes`)
            }else{
                res.send('Wrong Password')
            }
        }
    })
})

/////// New Route
app.get('/sessions/:id/newNote', (req, res) =>{
    User.findOne({_id: req.params.id}, (err, foundUser) =>{
        console.log('FOUND DA USERRRRRRRR ' + foundUser)
        res.render('sessions/newNote.jsx', {
            user: foundUser
        })
    })
})



//////// Create Route
app.post('/sessions/:id/notes', (req, res) =>{
    User.update({_id: req.params.id}, {$push: {'notes': req.body.notes}}, (err, data) =>{
        res.redirect(`/sessions/${req.params.id}/notes`)
    })
})


////// Index
app.get('/sessions/:index/notes', (req, res) =>{
    User.findOne({_id: req.params.index}, (err, foundUser) =>{
        console.log(foundUser)
        res.render('sessions/Index.jsx', {
            user: foundUser
        })
    })
}
)


/////// Show Note
app.get('/sessions/:id/:index/show', (req, res) =>{
    User.findOne({_id: req.params.id}, (err, foundUser) =>{
        console.log(foundUser)
        res.render('sessions/Show.jsx', {
            user: foundUser, 
            index: req.params.index
        })
    })
})

//////// Account Settings
app.get('/sessions/:id/settings', (req, res) =>{
    User.findOne({_id: req.params.id}, (err, foundUser) =>{
        res.render(`sessions/accountSettings.jsx`, {
            user: foundUser
        })
    })
})


/////// delete user
app.delete('/sessions/:id/delete', (req, res) =>{
    User.findOneAndRemove({_id: req.params.id}, (err, deleteUser) =>{
        res.redirect('/')
    })
})


////// delete user note
app.post('/sessions/:id/:noteIndex/delete', (req, res) =>{
    User.findById({_id: req.params.id}, (err, foundNote) =>{
        User.update({_id: req.params.id}, {$pull: {'notes': foundNote.notes[req.params.noteIndex]}}, (err, date) =>{
            res.redirect(`/sessions/${req.params.id}/notes`)

        })
    })
})


////// Edit Note Route
app.get('/sessions/:id/:noteIndex/edit', (req, res) =>{
    User.findById({_id: req.params.id}, (err, note) =>{
        res.render('sessions/editNote.jsx', {
            note: note, 
            index: req.params.noteIndex
        })
    })
})


//////// Update note Route
app.put('/sessions/:id/:noteIndex/edit', (req, res) =>{
        User.findById({_id: req.params.id}, (err, foundNote) =>{
            User.update({_id: req.params.id}, {$pull: {'notes': foundNote.notes[req.params.noteIndex]}}, (err, date) =>{
                User.findByIdAndUpdate({_id: req.params.id}, {$push: {'notes': {$each: [req.body.notes], $position: req.params.noteIndex}}}, (err, newNote) =>{
                    console.log('hellloooooooooooooo ' + req.body.notes)
                    res.redirect(`/sessions/${req.params.id}/${req.params.noteIndex}/show`)
                })
            })
        })
})


// User.findByIdAndUpdate({_id: req.params.id}, {$pull:{'notes': req.body}})

// })
// res.redirect(`/sessions/${req.params.id}/${req.params.noteIndex}/show`)

////// sessions delete
app.delete('/sessions/', (req, res) =>{
    req.sessions.destroy(()=>{
        res.redirect('/sessions/newSession')
    })
})



//////Listener
app.listen(port, ()=>{
    console.log('listening on port ' + port)
})

