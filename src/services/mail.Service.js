const mail = require('nodemailer');
const goole = require('googleapis').google;
// config oauth 2
const OAuth2Client = new goole.auth.OAuth2(
    global.config.google.clientID,
    global.config.google.clientSecret,
    global.config.google.redirectUri);

OAuth2Client.setCredentials({ refresh_token: global.config.google.refreshToken });
// accesstoken
const accessToken = OAuth2Client.getAccessToken();
const transporter = mail.createTransport({
    service: 'gmail',
    auth: {
        type: 'OAuth2',
        user: global.config.mail.username,
        clientId: global.config.google.clientID,
        clientSecret: global.config.google.clientSecret,
        refreshToken: global.config.google.refreshToken,
        accessToken: accessToken,
    },
})

transporter.verify((error, success) => {
    if (error) {
        global.logger.info('Nodemailer verification error:', error);
    } else {
        global.logger.info('Nodemailer is ready to send emails');
    }
});

const sendMail = async (mail, subject, text) => {
    try {
        const mailOption = {
            from: global.config.mail.username,
            to: mail,
            subject: subject,
            text: text,
        }
        const result = await transporter.sendMail(mailOption);
        return result;

    } catch (error) {
        global.logger.error(`Send mail error: ${error.message}`);
        throw error;
    }
}

module.exports = {
    sendMail
}