import express from 'express';
import StorageService from '../../../services/storage';

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    // Extract the request body and the required parameters
    const { name, size, volumeType } = req.body;

    // Create a new storage volume using the StorageService
    const volume = await StorageService.createVolume(name, size, volumeType);

    // Return the storage volume data in the response
    res.json(volume);
  } catch (error) {
    // If there is an error, return a 500 Internal Server Error response
    res.status(500).json({ error: error.message });
  }
});

export default router;
