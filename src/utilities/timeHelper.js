const time = require('moment');

const getNow = () => {
    return time().format('YYYY-MM-DD HH:mm:ss');
}

const getNowDate = () => {
    return time().format('YYYY-MM-DD');
}

module.exports = {
    getNow,
    getNowDate,
}