const express = require('express');
const router = express.Router();
const bookingController = require('../controller/bookingController');
const {verifyAdmin, verifyUser ,verifyToken} = require('../middleware/authMiddleware');

//Tambah Data Booking
router.post('/booking', verifyToken ,bookingController.createBooking);
//Update Status Booking
router.put('/updateBooking/:id', verifyAdmin, bookingController.updateBooking);
//Delete Booking
router.delete('/deleteBooking/:id', verifyAdmin, bookingController.deleteBooking);
//Menampilkan Data Booking Yang dipesan user di landing page
router.get('/booking/:id', verifyUser, bookingController.getIdBookingsUser)
//Menampilkan Data Booking untuk halaman dashboard
router.get('/dashboard', verifyAdmin, bookingController.getAllBookings);
//Menampilkan Data Booking untuk halaman order paket trip
router.get('/order-paket-trip', verifyAdmin, bookingController.getAllBookings2);
//Menampilkan Data Booking berdasarkan id
router.get('/order-paket-trip/:id', verifyAdmin, bookingController.getIdBookings);


module.exports = router;
