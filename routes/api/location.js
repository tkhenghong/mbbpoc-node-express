// A route that provides availab6le countries, along with their own states/cities respectively.
const mongoose = require('mongoose');
const router = require('express').Router();
const passport = require('passport');
const countries = require('country-flag-emoji-json');


router.get('/', function (req, res, next) {
    return res.json(countries.filter(['']));
});

module.exports = router;