import express from 'express';
import NetworkingService from '../../../services/networking';

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    // Extract the request body and the required parameters
    const { vpcId, cidrBlock } = req.body;

    // Create a new subnet using the NetworkingService
    const subnet = await NetworkingService.createSubnet(vpcId, cidrBlock);

    // Return the subnet data in the response
    res.json(subnet);
  } catch (error) {
    // If there is an error, return a 500 Internal Server Error response
    res.status(500).json({ error: error.message });
  }
});

export default router;
