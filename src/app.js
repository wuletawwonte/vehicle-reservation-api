const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello there');
})

module.exports = app;