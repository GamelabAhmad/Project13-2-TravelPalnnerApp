const express = require('express');
const router = express.Router();
const destinationsController = require('../controller/destinationsController');
const { verifyAdmin, verifyToken } = require('../middleware/authMiddleware');

//insert destination
router.post('/addDestinations', verifyAdmin, destinationsController.createDestinations);
//update destination
router.put('/updateDestination/:id', verifyAdmin, destinationsController.updateDestination);
//delete destination
router.delete('/deleteDestinations/:id', verifyAdmin, destinationsController.deleteDestination);
//get destinations
router.get('/destinations', destinationsController.getAllDestination);
//get destinations by id
router.get('/destinations/:id', destinationsController.getDestinationById);

module.exports = router;
