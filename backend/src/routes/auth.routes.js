const express = require('express');
const authController = require('../controller/auth.controller')
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/create', authController.registerUser);

router.post('/login', authController.loginUser);

router.get('/me', authMiddleware.authUser, authController.getProfile);

router.post('/logout', authMiddleware.authUser, authController.logoutUser);

// router.post('/forgot-password', authController.forgotPassword);

// router.post('/dashboard', authMiddleware.authUser, (req, res) => {
//   res.status(200).json({
//     message: 'Welcome to the dashboard!',
//     user: req.user,
//   });
// });

module.exports = router;