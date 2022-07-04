require('dotenv').config();
module.exports = {
    ...process.env,
    SECRET: process.env.NODE_ENV === 'production' ? process.env.SECRET : 'secret',
    MONGODB_URI: process.env.MONGODB_URI || 'mongodb://localhost:27017/mbbpoc',
};
