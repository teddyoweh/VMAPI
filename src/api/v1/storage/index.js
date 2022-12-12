const express = require('express');
const router = express.Router();

const createVolume = require('./create-volume');
const deleteVolume = require('./delete-volume');
const attachVolume = require('./attach-volume');
const detachVolume = require('./detach-volume');

// Use the createVolume function for requests to the /create-volume endpoint
router.use('/create-volume', createVolume);

// Use the deleteVolume function for requests to the /delete-volume endpoint
router.use('/delete-volume', deleteVolume);

// Use the attachVolume function for requests to the /attach-volume endpoint
router.use('/attach-volume', attachVolume);

// Use the detachVolume function for requests to the /detach-volume endpoint
router.use('/detach-volume', detachVolume);

module.exports = router;
