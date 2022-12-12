import VirtualMachineClient from '../../../clients/virtual-machines';

class VirtualMachineService {
  constructor() {
    this.client = new VirtualMachineClient();
  }

  async createVirtualMachine(name, instanceType, imageId, keyName) {
    // Call the createVirtualMachine method of the VirtualMachineClient to create the virtual machine
    const vm = await this.client.createVirtualMachine(name, instanceType, imageId, keyName);
    return vm;
  }

  async deleteVirtualMachine(id) {
    // Call the deleteVirtualMachine method of the VirtualMachineClient to delete the virtual machine
    await this.client.deleteVirtualMachine(id);
  }

  async startVirtualMachine(id) {
    // Call the startVirtualMachine method of the VirtualMachineClient to start the virtual machine
    await this.client.startVirtualMachine(id);
  }

  async stopVirtualMachine(id) {
    // Call the stopVirtualMachine method of the VirtualMachineClient to stop the virtual machine
    await this.client.stopVirtualMachine(id);
  }
}

export default VirtualMachineService;
