const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/qtsy');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', function() {
  const productSchema = new mongoose.Schema({
    name: String,
    photos: [String]
  })
})

module.exports = db;