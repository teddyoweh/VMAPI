import NetworkingClient from '../../../clients/networking';

class NetworkingService {
  constructor() {
    this.client = new NetworkingClient();
  }

  async createVPC(name, cidrBlock) {
    // Call the createVPC method of the NetworkingClient to create the VPC
    const vpc = await this.client.createVPC(name, cidrBlock);
    return vpc;
  }

  async deleteVPC(id) {
    // Call the deleteVPC method of the NetworkingClient to delete the VPC
    await this.client.deleteVPC(id);
  }

  async createSubnet(vpcId, cidrBlock) {
    // Call the createSubnet method of the NetworkingClient to create the subnet
    const subnet = await this.client.createSubnet(vpcId, cidrBlock);
    return subnet;
  }

  async deleteSubnet(id) {
    // Call the deleteSubnet method of the NetworkingClient to delete the subnet
    await this.client.deleteSubnet(id);
  }
}

export default NetworkingService;
