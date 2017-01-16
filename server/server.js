const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const moment = require('moment');

const app = express();

const port = process.env.PORT || 7777;

app.use(bodyParser.json());

app.use(express.static('./client'));

app.use(cors());

app.get('*', (req, res) => {
  res.sendFile(path.resolve('client', 'index.html'));
});

app.listen(port, () => {
  console.log('Server is listening on port: ', port);
  console.log('The current time is: ', moment().format('h:mm:ss a'));
});