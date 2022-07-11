// A General API for display server welcome message.

const mongoose = require('mongoose');
const auth = require("../auth");
const router = require('express').Router();


router.get('/', function (req, res, next) {
    res.json({message: `This is ${process.env.APP_NAME} API.`});
});

router.get('/test', function (req, res, next) {
    res.json({message: `Testing API.`});
});


module.exports = router;