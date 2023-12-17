const express = require('express')
const router = express.Router()
const userController = require('../controllers/user.Controller')

router
    .route('/')
    .get(userController.getListUser)
    .post(userController.createUser)

/**
 * @swagger
 * tags:
 *  name: User
 *  description: API to manage your user.
 */

/**
 * @swagger
 * /user:
 *   get:
 *     summary: Get list user
 *     description: Get list user
 *     tags: [User]
 *     responses:
 *       200:
 *         description: Success
 *       500:
 *         description: Internal Server Error
 *       401:
 *         description: Unauthorized
 *    
 *   post:
 *     summary: Create user
 *     description: Create user
 *     tags: [User]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/User"
 *     responses:
 *       200:
 *         description: Success
 *       400:
 *         description: Bad request
 *       500:
 *         description: Internal Server Error
 *       401:
 *         description: Unauthorized
 *         
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       properties:
 *         email:
 *           type: string
 *           description: Email of user
 *           example: "chisbr2002@gmail.com"
 *         password:
 *           type: string
 *           description: Password of user
 *           example: "12345678"
 *       required:
 *         - isSpecialDay
 */

module.exports = router