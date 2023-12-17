const express = require('express')
const router = express.Router();

router.use('/user', require('./user.Route'));
router.use('/authen', require('./authen.Route'));

module.exports = router
