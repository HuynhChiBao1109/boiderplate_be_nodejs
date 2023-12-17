const userModel = require('../models/user.Model');

const getListUser = async (req, res) => {
    try {
        const results = await userModel.getListUser();
        res
            .status(200)
            .json({
                status: 'success',
                data: results
            });
    } catch (error) {
        if (error.message === 'ValidationError') {
            res
                .status(400)
                .json({
                    status: 'error',
                    message: error.message
                });
            return;
        }
        res
            .status(500)
            .json({
                status: 'error',
                message: error.message
            });
    }
}


const createUser = async (req, res) => {
    try {
        const results = await userModel.createUser(req.body);
        res
            .status(201)
            .json({
                status: 'Create user success',
            });
    } catch (error) {
        res
            .status(500)
            .json({
                status: 'error',
                message: error.message
            });
    }
}

module.exports = {
    getListUser: getListUser,
    createUser: createUser
}