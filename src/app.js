const express = require('express');
const app = express();
const mongoose = require('mongoose');

const connectionString = "mongodb+srv://wuletaw:NwlKrS9Li7ovO1S4@cluster0.buyq6.mongodb.net/vehicles?retryWrites=true&w=majority";

mongoose.connect(connectionString).then(() => {
    console.log('Successfully connected to mongo db');
}).catch((err) => {
    console.log("Error: " + err);
    console.error(err);
});


app.get('/', (req, res) => {
  res.send('Hello there');
})

module.exports = app;