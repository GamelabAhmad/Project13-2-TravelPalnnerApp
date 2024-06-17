const express = require('express');
const router = express.Router();
const tripController = require('../controller/tripsController');
const { verifyAdmin, verifyToken , verifyUser} = require('../middleware/authMiddleware');

//insert trip
router.post('/addTrip', verifyAdmin, tripController.createTrip);
//update trip
router.put('/updateTrip/:id', verifyAdmin, tripController.updateTrip);
//delete trip
router.delete('/deleteTrip/:id', verifyAdmin, tripController.deleteTrip);
//get all trip
router.get('/trip', tripController.getAllTrips);
//get trip by id
router.get('/trip/:id', tripController.getTripsById);

module.exports = router;
