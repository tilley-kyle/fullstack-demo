var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/bugCollection', { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', () => {
  console.log('You are NOT the Love Delicatessen')
});
db.once('open', () => {
  console.log('You ARE the Love Delicatessen');
});

const bugSchema = new mongoose.Schema({
  bugName: Number,
  bugDescription: String,
  reportedBy: String,
  createdDate: String,
  assignedTo: String,
  threatLevel: String,
});

const Bug = mongoose.model('Bug', bugSchema);

module.exports = Bug;