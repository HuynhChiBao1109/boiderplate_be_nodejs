const pool = require('../services/query.Service')
const queries = require('../queries/query.Helper')

const checkUserExists = async (req, res, next) => {
    try {
        const { email } = req.body;
        const results = await pool
            .getData(
                queries.user.checkUserExists,
                [email]
            );
        if (results.length === 0) {
            next();
        } else {
            res.status(409).json({
                message: 'Email already exists'
            })
        }
    } catch (error) {
        global.logger.error(`Validation - Check user exists error: ${error.message}`)
        res.status(500).json({
            message: 'Internal server error'
        })
    }
}