const mongoose = require('mongoose');

const vehicleSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    year: {type: String, required: false},
    horsepower: {type: String, required: false},
    make: {type: String, required: true},
    model: {type: String, required: true},
    price: {type: String, required: false},
    img_url: {type: String, required: true}
});

module.exports = mongoose.model('Vehicle', vehicleSchema);