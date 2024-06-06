const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');
const {check} = require('express-validator');

router.post('/register', [
    check('email').isEmail().withMessage('Email tidak valid'),
    check('password').isLength({ min: 6 }).withMessage('Password harus memiliki minimal 6 karakter')
], userController.register);

router.get('/login', userController.login);



module.exports = router;