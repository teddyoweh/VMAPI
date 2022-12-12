import express from 'express';
import NetworkingService from '../../../services/networking';

const router = express.Router();

router.delete('/:id', async (req, res) => {
  try {
    // Extract the subnet ID from the request parameters
    const { id } = req.params;

    // Delete the subnet using the NetworkingService
    await NetworkingService.deleteSubnet(id);

    // Return a 204 No Content response
    res.sendStatus(204);
  } catch (error) {
    // If there is an error, return a 500 Internal Server Error response
    res.status(500).json({ error: error.message });
  }
});

export default router;
