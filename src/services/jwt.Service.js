const jwt = require('jsonwebtoken');

const generateToken = (username) => {
    try {
        const accessToken = jwt.sign(
            { username },
            global.config.jwt.secretKey,
            { expiresIn: global.config.jwt.expiresIn }
        );
        return accessToken;
    } catch (error) {
        global.logger.error(`Generate token error: ${error.message}`);
        throw error;
    }
}

const verifyAccessToken = (accessToken) => {
    try {
        const decoded = jwt.verify(accessToken, global.config.jwt.secretKey);
        return decoded;
    } catch (error) {
        global.logger.error(`Verify access token error: ${error.message}`);
        throw error;
    }
}

module.exports = {
    generateToken,
    verifyAccessToken
}