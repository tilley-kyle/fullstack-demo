const express = require('express');
const cors = require('cors');
const bp = require('body-parser');
const Bug = require('./db/queries.js');

const app = express();
const port = 3000;

app.use(cors());
app.use(bp.json());

app.listen(port, () => console.log("Kitty kitty kitty kitty kitty kitty yeah!"))

//no middleware for this app because all of my data will be sent
//in proper format already... I think for now

//route to get all bug reports in the db
app.get('/', (req, res) => {
  res.status(201);
  res.send('get request');
});

//route to handle new bugs created in the client
app.post('/', (req, res) => {
  res.status(201);
  res.send('post request');
});

