const express = require('express');
const router = express.Router();

// Import the individual API functions
const createVm = require('./create-vm');
const deleteVm = require('./delete-vm');
const startVm = require('./start-vm');
const stopVm = require('./stop-vm');

// Create routes for the /api/v1/virtual-machines endpoint
router.post('/', createVm);
router.delete('/:vmId', deleteVm);
router.post('/:vmId/start', startVm);
router.post('/:vmId/stop', stopVm);

// Export the routes
module.exports = router;
