const mongoose = require('mongoose');

const Vehicle = require('./model/vehicle.js');

exports.getAllVehicles = (req, res) => {
  Vehicle.find()
    .exec()
    .then((docs) => {
      res.status(200).json(docs);
    })
    .catch((err) => {
      res.status(500).json({
        error: err,
      });
    });
};

exports.registerVehicle = (req, res) => {
  const vehicle = new Vehicle({
    _id: mongoose.Types.ObjectId(),
    year: req.body.year,
    horsepower: req.body.horsepower,
    make: req.body.make,
    model: req.body.model,
    price: req.body.price,
    img_url: req.body.img_url,
  });

  vehicle
    .save()
    .then(() => {
      res.status(200).json({
        message: 'Vehicle registered successfully',
        data: vehicle,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: `Internal Server Error: ${err}`,
      });
    });
};
