const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
debugger;
db.once('open', function() {
  const productSchema = new mongoose.Schema({
    name: String,
    photos: [String]
  })
  const Product = mongoose.model('Product', productSchema);

  const blueBird = new Product({
    name: 'Blue Bird',
    photos: ['https://images.app.goo.gl/wp1AnspjSPWQiLcYA']});
  debugger;
})


debugger;
module.exports = db;