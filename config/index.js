require('dotenv').config();
module.exports = {
    ...process.env,
    APP_ID: process.env.ID || 'MY',
    SECRET: process.env.SECRET || 'secret',
    MONGODB_URI: process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/mbbpoc',
};
