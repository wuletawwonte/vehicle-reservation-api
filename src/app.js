const express = require('express');

const app = express();
const mongoose = require('mongoose');

// import routes
const vehicleRoutes = require('./vehicleroutes.js');

const connectionString = 'mongodb+srv://wuletaw:NwlKrS9Li7ovO1S4@cluster0.buyq6.mongodb.net/vehiclesdb';

mongoose.connect(connectionString).then(() => {
  console.log('Successfully connected to mongo db');
}).catch((err) => {
  console.log(`Error: ${err}`);
});

// parse json data and url encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// handle CORS error
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', '*');
    return res.status(200).json({});
  }
  next();
  return null;
});

app.use('/vehicle', vehicleRoutes);

app.get('/', (req, res) => {
  res.send('Hello there');
});

app.use((req, res, next) => {
  const error = new Error('Endpoint Not found');
  error.status = 404;
  next(error);
});

app.use((error, req, res) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
});

module.exports = app;