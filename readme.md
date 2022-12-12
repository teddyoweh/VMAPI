# VMAPI
 A microservice-based system for managing a large-scale cloud computing infrastructure. This is a microservice that provides API endpoints for virtual machines, storage, and networking resources.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Before you begin, make sure you have Node.js and npm installed on your system. You can check if you have these prerequisites installed by running the following commands in your terminal:

```sh
node --version
npm --version
```


If either of these commands return a version number, you have the prerequisites installed. If not, you can install them by following the instructions [here](https://nodejs.org/en/download/).

### Installing

To install the dependencies for this project, run the following command in your terminal from the root of the project:


```sh
npm install
```


This will install all of the dependencies listed in the `package.json` file.

### Running the service

To run the service, use the following command in your terminal from the root of the project:

```sh
npm start
```


This will start the service and begin listening for requests on port `3000`. You can specify a different port by setting the `PORT` environment variable when starting the service, like this:



## API

The API for this microservice provides the following endpoints:

### Virtual Machines

```sh
GET /api/v1/virtual-machines
```

This endpoint returns a list of virtual machines.

### Storage

```sh
GET /api/v1/storage
```