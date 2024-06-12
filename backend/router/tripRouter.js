const express = require('express');
const router = express.Router();
const tripController = require('../controller/tripController');
const { verifyAdmin, verifyToken } = require('../middleware/authMiddleware');

// Tambah Data Trip
router.post('/', verifyToken, verifyAdmin, tripController.createTrip);
// Menampilkan Semua Data Trip
router.get('/', tripController.getAlltrip);
// Menampilkan Data Trip Berdasarkan ID
router.get('/:id', tripController.getTripById);
// Update Data Trip Berdasarkan ID
router.put('/:id', verifyToken, verifyAdmin, tripController.updateTrip);
// Hapus Data Trip Berdasarkan ID
router.delete('/:id', verifyToken, verifyAdmin, tripController.deleteTrip);

module.exports = router;
