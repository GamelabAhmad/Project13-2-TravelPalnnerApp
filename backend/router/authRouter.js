const express = require('express');
const router = express.Router();
const authController = require('../controller/authController');
const {check, validationResult} = require('express-validator');
const { verifyToken } = require('../middleware/authMiddleware');

router.post('/register', [
    check('email').isEmail().withMessage('Email tidak valid'),
    check('password').isLength({ min: 6 }).withMessage('Password harus memiliki minimal 6 karakter'),
    check('phone').isMobilePhone('id-ID').withMessage('No Telepon Harus format indonesia contoh : 08**********'),
], 
(req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();}
,authController.register);

router.get('/login', authController.login);

// Rute untuk Google OAuth
router.get('/google', authController.loginWithGoogle);
router.get('/google/callback', authController.googleCallback);

// Rute yang membutuhkan verifikasi token
router.get('/profile', verifyToken, authController.protectedRoute);

//Rute untuk logout
router.get('/logout', authController.logout);

module.exports = router;