const joi = require('joi');
const bcrypt = require('bcrypt');
const pool = require('../services/query.Service')
const queries = require('../queries/query.Helper')
const mail = require('../services/mail.Service');

pool.getPool();


const userSchema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().min(8).required(),
});

const getListUser = async () => {
    try {
        const results = await pool
            .getData(
                queries.user.getListUser,
                []
            );
        return results;
    } catch (error) {
        global.logger.error(`Model - Get list user error: ${error.message}`)
        throw error
    }
}

const createUser = async (body) => {
    try {
        const { error, value } = userSchema.validate(body);
        if (error) {
            throw error;
        } else {
            const hashPassword = await bcrypt.hash(value.password, 10);
            const results = await pool
                .getData(
                    queries.user.createUser,
                    [
                        value.email,
                        hashPassword,
                    ]
                );
            // send mail
            await mail.sendMail(value.email, 'Hù', 'Concac');
            return results;
        }
    } catch (error) {
        global.logger.error(`Model - Create user error: ${error.message}`)
        throw error;
    }
}

module.exports = {
    getListUser: getListUser,
    createUser: createUser
}