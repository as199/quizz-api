const express = require('express');
const router = express.Router();

const authController = require('../controllers/AuthController');

router.post("/login", authController.connect)


module.exports =router;