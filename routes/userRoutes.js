const express = require('express');
const router = express.Router();
const authController = require('../controller/userController');

// Routes for logn signup 
router.post('/signup', authController.createUser);
router.post('/login', authController.loginUser);

module.exports = router;
