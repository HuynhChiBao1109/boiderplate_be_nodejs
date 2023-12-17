const queries = require('../queries/query.Helper')
const pool = require('../services/query.Service')
const bcrypt = require('bcrypt')

const login = async (data) => {
    try {
        const results = await pool
            .getData(
                queries.authen.login,
                [
                    data.email
                ]
            )

        // const checkPassword = await bcrypt.compare(data.password, results[0].password)

        if (results.length === 0) {
            throw new Error('Email or password is incorrect')
        }

        // if (!checkPassword) {
        //     throw new Error('Email or password is incorrect')
        // }

        const res = {
            email: results[0].email
        }

        return res;
    } catch (error) {
        throw error;
    }
}

module.exports = {
    login
}