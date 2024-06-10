const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');
const {verifyAdmin, verifyToken, verifyUser} = require('../middleware/authMiddleware');

//tambah admin
router.post('/addAdmin', verifyAdmin, userController.createAdmin);
//tambah user
router.post('/addUser', verifyAdmin, userController.createUser);
//update user
router.put('/update/:id_user', verifyAdmin, userController.updateUser);
//menghapus user
router.delete('/delete/:id_user', verifyAdmin, userController.deleteUser)
//Menampilkan semua user
router.get('/user', verifyAdmin, userController.getAlluser);
//menampilkan user berdasarkan id
router.get('/:id_user', verifyAdmin, userController.getIdUser);

module.exports = router;