const express = require('express');
const axios = require('axios');
const path = require('path');

const app = express();

app.use(express.static(path.resolve(__dirname, './client/build')));

app.get('/', (req, res) => {
  res.end();
})

const port = process.env.PORT || 5000;

app.listen(port, () => console.log("App listening on port " + port));