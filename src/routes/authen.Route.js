const Express = require("express");
const router = Express.Router();
const AuthenController = require("../controllers/authen.Controller");


router
    .route("/login")
    .post(AuthenController.login);

router
    .route("/logout")
    .get(AuthenController.logout);


/**
 * @swagger
 * tags:
 *  name: Authorization
 *  description: API to manage your authorization.
 */

/**
 * @swagger
 * /authen/login:
 *   post:
 *     summary: Login
 *     description: Authontication login
 *     tags: [Authorization]
 *     security:
 *     - basicAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/Login"
 *     responses:
 *       200:
 *         description: Success
 *       400:
 *         description: Bad request
 *       500:
 *         description: Internal Server Error
 */

/**
 * @swagger
 * /authen/logout:
 *   get:
 *     summary: Logout
 *     description: Authontication logout
 *     tags: [Authorization]
 *     security:
 *     - basicAuth: []
 *     responses:
 *       200:
 *         description: Success
 *       500:
 *         description: Internal Server Error
 *       401:
 *         description: Unauthorized
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Login:
 *       type: object
 *       properties:
 *         email:
 *           type: string
 *           minLength: 9
 *           maxLength: 32
 *           example: 'baohc110902@gmail.com'
 *         password:
 *           type: string
 *           example: 123
 *       required:
 *         - phone
 *         - password
 */

module.exports = router;