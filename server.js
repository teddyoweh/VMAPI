const Hapi = require('hapi');
const server = Hapi.server({
  host: 'localhost',
  port: 3000
});

// Import the API routes from the /src/api/v1 directory
const virtualMachinesRoutes = require('./src/api/v1/virtual-machines');
const storageRoutes = require('./src/api/v1/storage');
const networkingRoutes = require('./src/api/v1/networking');

// Use the API routes for requests to the /api/v1/virtual-machines endpoint
server.route(virtualMachinesRoutes);

// Use the API routes for requests to the /api/v1/storage endpoint
server.route(storageRoutes);

// Use the API routes for requests to the /api/v1/networking endpoint
server.route(networkingRoutes);

// Start the server
const start = async () => {
  try {
    await server.start();
  } catch (err) {
    console.log(err);
    process.exit(1);
  }

  console.log('Server running at:', server.info.uri);
};

start();
