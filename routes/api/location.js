// A route that provides availab6le countries, along with their own states/cities respectively.
const mongoose = require('mongoose');
const router = require('express').Router();
const passport = require('passport');
const User = mongoose.model('User');
const auth = require('routes/auth');
const countries = require('country-flag-emoji-json');


module.exports = router;