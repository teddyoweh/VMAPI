import express from 'express';
import VirtualMachineService from '../../../services/virtual-machines';

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    // Extract the request body and the required parameters
    const { name, imageId, instanceType, keyName } = req.body;

    // Create a new virtual machine using the VirtualMachineService
    const vm = await VirtualMachineService.createVirtualMachine(name, imageId, instanceType, keyName);

    // Return the virtual machine data in the response
    res.json(vm);
  } catch (error) {
    // If there is an error, return a 500 Internal Server Error response
    res.status(500).json({ error: error.message });
  }
});

export default router;
