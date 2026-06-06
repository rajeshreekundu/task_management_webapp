const express = require('express');
const authController = require('../controller/auth.controller')


const router = express.Router();

router.post('/create', authController.registerUser);

// router.get('/login', authController.loginUser);


module.exports = router;