const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Medical Appointments || API',
    description: 'Swagger medical appointments api',
    version: '1.0.0',
  },
  host: 'localhost:3010',
  schemes: ['https', 'http'],
};

const outputFile = './swagger.json';
const endpointsFiles = ['./index.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);
