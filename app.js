var http = require('http'),
    path = require('path'),
    methods = require('methods'),
    express = require('express'),
    bodyParser = require('body-parser'),
    session = require('express-session'),
    cors = require('cors'),
    passport = require('passport'),
    errorhandler = require('errorhandler'),
    mongoose = require('mongoose');

var isProduction = process.env.NODE_ENV === 'production';


var container = require('./app/container');

const app = container.resolve('app');

app.start().catch((error) => {
    console.warn(error);
    process.exit();
});