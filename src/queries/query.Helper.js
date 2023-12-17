module.exports = {
    user: {
        getListUser: 'SELECT * FROM user',

        createUser: 'INSERT INTO user (email, password) VALUES (?, ?)'
    },

    product: {
        getListProduct: 'SELECT * FROM product'
    },

    authen: {
        login: 'SELECT * FROM user WHERE email = ?'
    }
}