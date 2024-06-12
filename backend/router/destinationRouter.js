const express = require('express');
const router = express.Router();
const destinationController = require('../controller/destinationController');
const { verifyAdmin, verifyToken } = require('../middleware/authMiddleware');

// Tambah Data Destinasi
router.post('/', verifyToken, verifyAdmin, destinationController.createDestination);
// Menampilkan Semua Data Destinasi
router.get('/', destinationController.getAllDestinations);
// Menampilkan Data Destinasi Berdasarkan ID
router.get('/:id', destinationController.getDestinationById);
// Update Data Destinasi Berdasarkan ID
router.put('/:id', verifyToken, verifyAdmin, destinationController.updateDestination);
// Hapus Data Destinasi Berdasarkan ID
router.delete('/:id', verifyToken, verifyAdmin, destinationController.deleteDestination);

module.exports = router;
