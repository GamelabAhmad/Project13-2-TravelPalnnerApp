const express = require('express');
const router = express.Router();
const forgotPassword = require('../controller/forgotPasswordController');
const {verifyToken} = require('../middleware/authMiddleware');

//Verifikasi Email 
router.get('/verifyEmail', forgotPassword.verifyEmail);
//Update password 
router.put('/resetPassword', verifyToken ,forgotPassword.resetPassword);


module.exports = router;