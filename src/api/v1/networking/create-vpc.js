import express from 'express';
import NetworkingService from '../../../services/networking';

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    // Extract the request body and the required parameters
    const { name, cidrBlock } = req.body;

    // Create a new VPC using the NetworkingService
    const vpc = await NetworkingService.createVPC(name, cidrBlock);

    // Return the VPC data in the response
    res.json(vpc);
  } catch (error) {
    // If there is an error, return a 500 Internal Server Error response
    res.status(500).json({ error: error.message });
  }
});

export default router;
