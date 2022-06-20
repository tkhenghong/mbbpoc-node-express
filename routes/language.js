// A route for switching languages
const mongoose = require('mongoose');
const router = require('express').Router();
const passport = require('passport');
const User = mongoose.model('User');
const auth = require('auth');

// Get language options

router.get('/language', auth.required, function(req, res, next){
    User.findById(req.payload.id).then(function(user){
        if(!user){ return res.sendStatus(401); }

        return res.json({user: user.toAuthJSON()});
    }).catch(next);
});

// Get translations
