const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Medical Appointments || API',
    description: 'Swagger medical appointments api',
    version: '1.0.0',
  },
  host: 'localhost:3010/appointments',
  schemes: ['http', 'https'],
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/appointments.r.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);
