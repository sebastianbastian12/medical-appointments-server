const express = require('express');
const mongodb = require('./data/database');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT;

app.get('/', (req, res) => {
  res.send('Medical Appointments || Home Page');
});

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-with, Content-Type, Accept, Z-key'
  );
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, DELETE, OPTIONS'
  );
  next();
});

app.use(bodyParser.json());

app.use('/appointments', require('./routes/appointments.r'));

mongodb.initDb((err) => {
  if (err) {
    console.log(err);
  } else {
    app.listen(port, () => {
      console.log(`Data base and web server working on port ${port}`);
    });
  }
});
