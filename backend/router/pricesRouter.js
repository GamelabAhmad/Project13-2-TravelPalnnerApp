const express = require('express');
const router = express.Router();
const pricesController = require('../controller/pricesController');
const {verifyToken, verifyAdmin} = require('../middleware/authMiddleware');

//insert
router.post('/addPrices', pricesController.createPrices);
//update
router.put('/updatePrices/:id', pricesController.updatePrices);
//delete
router.delete('/deletePrices/:id', pricesController.deletePrices);
//get all
router.get('/prices', pricesController.getAllPrices);
//get by id
router.get('/prices/:id', pricesController.getByIdPrices);

module.exports = router;