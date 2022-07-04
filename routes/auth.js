// const jwt = require('express-jwt');
const {expressjwt: jwt} = require('express-jwt');

const SECRET = require('../config').SECRET;

function getTokenFromHeader(req) {
    if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Token' ||
        req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
        return req.headers.authorization.split(' ')[1];
    }

    return null;
}

const auth = {
    required: jwt({
        secret: SECRET,
        algorithms: ["HS256"],
        userProperty: 'payload',
        getToken: getTokenFromHeader
    }),
    optional: jwt({
        secret: SECRET,
        algorithms: ["HS256"],
        userProperty: 'payload',
        credentialsRequired: false,
        getToken: getTokenFromHeader
    })
};

module.exports = auth;
