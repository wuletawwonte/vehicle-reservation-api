const express = require("express");
const route = express.Router();

const vehicleController = require('./vehiclecontroller.js');

route.get('/', vehicleController.getAllVehicles);

module.exports = route;
