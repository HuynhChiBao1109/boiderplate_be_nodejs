const AuthenModel = require('../models/authen.Model');
const jwtService = require('../services/jwt.Service');

const login = async (req, res) => {
    try {
        // check session is existed
        if (req.session.user) {
            res
                .status(200)
                .json(
                    {
                        message: 'User is logged in',
                        user: req.session.user
                    }
                );
            return;
        }
        // check email and password is existed
        const results = await AuthenModel.login(req.body);
        // set session
        req.session.user = results;
        // generate token
        const accessToken = jwtService.generateToken(results);
        // set cookie
        res.cookie('accessToken', accessToken, { maxAge: 3600000 });
        // return response
        res
            .status(200)
            .json(
                {
                    message: 'Login success',
                    user: results
                }
            );
    } catch (error) {
        if (error.message === 'Email or password is incorrect') {
            res
                .status(400)
                .json(
                    {
                        message: error.message
                    }
                );
            return;
        }

        res
            .status(500)
            .json(
                {
                    message: error.message
                }
            );
    }
}

const logout = async (req, res) => {
    try {
        // check session is existed
        if (!req.session.user) {
            res
                .status(401)
                .json(
                    {
                        message: 'Unauthorized'
                    }
                );
            return;
        }
        // destroy session
        req.session.destroy();
        // clear cookie
        res.clearCookie('accessToken');
        res
            .status(200)
            .json(
                {
                    message: 'Logout success'
                }
            );
    } catch (error) {
        res
            .status(500)
            .json(error);
    }
}

module.exports = {
    login: login,
    logout: logout
}