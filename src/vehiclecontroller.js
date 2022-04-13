const Vehicle = require("./model/vehicle");

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
