const express = require('express');
const router = express.Router();
const bookingController = require('../controller/bookingController');
const {verifyAdmin, verifyUser ,verifyToken} = require('../middleware/authMiddleware');

//Tambah Data Booking
router.post('/booking', verifyToken ,verifyUser , bookingController.createBooking);
//Update Status Booking
router.put('/booking/:id', verifyAdmin, bookingController.updateBooking);
//Delete Booking
router.delete('/booking/:id', verifyAdmin, bookingController.deleteBooking);
//Menampilkan Data Booking Yang dipesan user di landing page
router.get('/booking/:id', verifyUser, bookingController.getIdBookingsUser)
//Menampilkan Data Booking untuk halaman dashboard
router.get('/dashboard', verifyAdmin, bookingController.getAllBookings);
//Menampilkan Data Booking berdasarkan id
router.get('/dashboard/:id', verifyAdmin, bookingController.getIdBooking);


module.exports = router;
