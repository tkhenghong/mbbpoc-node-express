// A route that provide related currency APIs.
const mongoose = require('mongoose');
const router = require('express').Router();
const passport = require('passport');
const User = mongoose.model('User');
const auth = require('routes/auth');

// Get available currencies with display formats

module.exports = router;