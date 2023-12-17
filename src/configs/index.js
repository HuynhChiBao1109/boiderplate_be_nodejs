const path = require('path')
require('dotenv').config({
    path: path.join(__dirname, '../../.env.' + process.env.NODE_ENV),
})

module.exports = {
    env: process.env.NODE_ENV,
    isDev: process.env.NODE_ENV === 'development',
    url: process.env.HOST_URL,
    port: process.env.HOST_PORT,
    mySql: {
        host: process.env.MYSQL_HOST,
        port: process.env.MYSQL_PORT,
        user: process.env.MYSQL_USERNAME,
        password: process.env.MYSQL_PASSWORD,
        database: process.env.MYSQL_DATABASE,
    },
    mail: {
        username: process.env.MAIL_USERNAME,
        password: process.env.MAIL_PASSWORD,
        services: process.env.MAIL_SERVICES,
        port: process.env.MAIL_PORT,
    },
    redis: {
        host: process.env.REDIS_HOST,
        port: process.env.REDIS_PORT,
        // password: process.env.REDIS_PASSWORD,
    },
    google: {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        refreshToken: process.env.GOOGLE_REFRESH_TOKEN,
        redirectUri: process.env.GOOGLE_REDIRECT_URI,
    },
    jwt: {
        secretKey: process.env.JWT_SECRET_KEY,
        expiresIn: process.env.JWT_EXPIRES_IN,
    }
}
