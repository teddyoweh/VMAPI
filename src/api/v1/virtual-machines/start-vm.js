import express from 'express';
import VirtualMachineService from '../../../services/virtual-machines';

const router = express.Router();

router.post('/:id/start', async (req, res) => {
  try {
    // Extract the virtual machine ID from the request parameters
    const { id } = req.params;

    // Start the virtual machine using the VirtualMachineService
    await VirtualMachineService.startVirtualMachine(id);

    // Return a 204 No Content response
    res.sendStatus(204);
  } catch (error) {
    // If there is an error, return a 500 Internal Server Error response
    res.status(500).json({ error: error.message });
  }
});

export default router;
