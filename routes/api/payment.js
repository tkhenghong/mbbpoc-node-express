// A route that provide payment gateway URLs, along with fees and charges.
const mongoose = require('mongoose');
const router = require('express').Router();
const passport = require('passport');
const User = mongoose.model('User');
const auth = require('routes/auth');

// Get M2U payment gateway URL
// https://www.maybank2u.com.my/mbb/m2u/m9006_enc/m2uMerchantLogin.do?

// Get EBPG payment gateway URL
// constants.SERVER_URL + ebpgPayPopupCallback

// Get FPX gateway URL
// http://www.myclear.org.my/personal-fpx.html

// Get fees and charges

module.exports = router;
