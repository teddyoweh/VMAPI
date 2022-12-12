import StorageClient from '../../../clients/storage';

class StorageService {
  constructor() {
    this.client = new StorageClient();
  }

  async createVolume(name, size, volumeType) {
    // Call the createVolume method of the StorageClient to create the storage volume
    const volume = await this.client.createVolume(name, size, volumeType);
    return volume;
  }

  async deleteVolume(id) {
    // Call the deleteVolume method of the StorageClient to delete the storage volume
    await this.client.deleteVolume(id);
  }

  async attachVolume(id, vmId) {
    // Call the attachVolume method of the StorageClient to attach the storage volume to the virtual machine
    await this.client.attachVolume(id, vmId);
  }

  async detachVolume(id) {
    // Call the detachVolume method of the StorageClient to detach the storage volume from the virtual machine
    await this.client.detachVolume(id);
  }
}

export default StorageService;
