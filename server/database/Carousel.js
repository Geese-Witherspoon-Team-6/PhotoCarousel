const mongoose = require('mongoose');
const db = require('./index.js');
mongoose.Promise = global.Promise;

const productSchema = new mongoose.Schema({
  name: String,
  photos: [String],
  productId: Number
},
  {
    timestamps: true
  }
);

const Product = mongoose.model('Product', productSchema);

// const blueBird = new Product({
//   name: 'Blue Bird',
//   photos: ['https://images.app.goo.gl/wp1AnspjSPWQiLcYA']});

module.exports = Product;