import express from 'express';
import StorageService from '../../../services/storage';

const router = express.Router();

router.delete('/:id', async (req, res) => {
  try {
    // Extract the storage volume ID from the request parameters
    const { id } = req.params;

    // Delete the storage volume using the StorageService
    await StorageService.deleteVolume(id);

    // Return a 204 No Content response
    res.sendStatus(204);
  } catch (error) {
    // If there is an error, return a 500 Internal Server Error response
    res.status(500).json({ error: error.message });
  }
});

export default router;
