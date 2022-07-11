// A General API for display server welcome message.

const mongoose = require('mongoose');
const auth = require("../auth");
const router = require('express').Router();

router.get('/', function (req, res, next) {
    console.log(`Entered: ${process.env.ID}`);
    res.json({message: `This is ${process.env.APP_ID} API.`});
});


module.exports = router;