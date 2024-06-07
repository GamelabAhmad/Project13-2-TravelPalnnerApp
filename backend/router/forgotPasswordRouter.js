const express = require('express');
const router = express.Router();
const forgotPassword = require('../controller/forgotPasswordController');

//Verifikasi Email 
router.post('/verifyEmail', forgotPassword.verifyEmail);
//Update password 
router.put('/resetPassword', forgotPassword.resetPassword);


module.exports = router;