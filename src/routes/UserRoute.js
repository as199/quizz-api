const express = require('express');
const router = express.Router();
const {checkToken} = require("../middlewares/AuthMiddleware")
const userController = require('../controllers/UserController');

/**
 * Get all users
 */
router.get('/',checkToken, userController.getUsers);
/**
 * GET user by id
 */
router.get('/:id',checkToken, userController.getUserByID);
/**
 * CREATE user
 */
router.post('/',checkToken, userController.createUser);
/**
 * UPDATE user
 */
router.put('/:id',checkToken, userController.updateUser);

module.exports = router;