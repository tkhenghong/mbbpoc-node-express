// A General API for display server welcome message.

const mongoose = require('mongoose');
const auth = require("../auth");
const router = require('express').Router();


router.get('/', auth.required, function (req, res, next) {
    res.json({message: `This is ${process.env.APP_NAME} API.`});
});


module.exports = router;