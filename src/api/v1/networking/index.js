const express = require('express');
const router = express.Router();

const createVPC = require('./create-vpc');
const deleteVPC = require('./delete-vpc');
const createSubnet = require('./create-subnet');
const deleteSubnet = require('./delete-subnet');

// Use the createVPC function for requests to the /create-vpc endpoint
router.use('/create-vpc', createVPC);

// Use the deleteVPC function for requests to the /delete-vpc endpoint
router.use('/delete-vpc', deleteVPC);

// Use the createSubnet function for requests to the /create-subnet endpoint
router.use('/create-subnet', createSubnet);

// Use the deleteSubnet function for requests to the /delete-subnet endpoint
router.use('/delete-subnet', deleteSubnet);

module.exports = router;
