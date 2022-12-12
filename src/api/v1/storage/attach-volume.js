import express from 'express';
import StorageService from '../../../services/storage';

const router = express.Router();

router.post('/:id/attach', async (req, res) => {
  try {
    // Extract the storage volume ID and the virtual machine ID from the request parameters
    const { id } = req.params;
    const { vmId } = req.body;

    // Attach the storage volume to the virtual machine using the StorageService
    await StorageService.attachVolume(id, vmId);

    // Return a 204 No Content response
    res.sendStatus(204);
  } catch (error) {
    // If there is an error, return a 500 Internal Server Error response
    res.status(500).json({ error: error.message });
  }
});

export default router;
