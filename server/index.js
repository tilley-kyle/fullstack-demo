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
  const bugs = Bug.find()
    .then( arr => {
      res.status(201);
      res.send(arr);
    })
  // res.status(201);
  // res.send(bugs);
});

//route to handle new bugs created in the client
app.post('/', (req, res) => {
  if (req.body.bugDescription.length === 0) {
    res.status(400);
    res.send('no information provided');
  } else {
  const newBug = new Bug(req.body);
  newBug.save();
  res.sendStatus(201);
  };
});

