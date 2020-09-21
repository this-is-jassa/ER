const dotenv = require('dotenv');

dotenv.config();

module.exports = {
    PORT: process.env.PORT,
    NODE_ENV: process.env.NODE_ENV,
    MONGO_CONNECTION_STRING: process.env.MONGO_CONNECTION_STRING,
    SENDGRID_API_KEY: process.env.SENDGRID_API_KEY,
    SUPER_SECRET: process.env.SUPER_SECRET,
    CLIENT_SECRET: process.env.CLIENT_SECRET
}
