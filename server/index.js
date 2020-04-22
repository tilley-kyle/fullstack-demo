const express = require('express');
const cors = require('cors');
const bp = require('body-parser');
const Bug = require('./db/queries.js');
// const getAll = require('./db/actQueries.getAll.js');

const app = express();
const port = 3000;

app.use(cors());
app.use(bp.json());

app.listen(port, () => console.log("Kitty kitty kitty kitty kitty kitty yeah!"))

//route to get all bug reports in the db
app.get('/', (req, res) => {
  const bugs = Bug.find();
  res.status(201);
  res.send('send');
});

//route to handle new bugs created in the client
app.post('/', (req, res) => {
  console.log(req.body);
  const newBug = new Bug(req.body);
  newBug.save();
  res.status(201);
  res.send('post request');
});

