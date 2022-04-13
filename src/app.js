const express = require('express');
const app = express();
const mongoose = require('mongoose');

const connectionString = "mongodb+srv://wuletaw:NwlKrS9Li7ovO1S4@cluster0.buyq6.mongodb.net/vehiclesdb";

mongoose.connect(connectionString).then(() => {
    console.log('Successfully connected to mongo db');
}).catch((err) => {
    console.log("Error: " + err);
    console.error(err);
});

// parse json data and url encoded data
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
  res.send('Hello there');
})

module.exports = app;