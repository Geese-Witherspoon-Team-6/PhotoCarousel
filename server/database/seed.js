const db = require('./index.js');
const Product = require('./Carousel.js');

const blueBird = new Product({
  name: 'Blue Bird',
  photos: ['https://images.app.goo.gl/wp1AnspjSPWQiLcYA']});

const insertFakeData = function () {
  Product.create(blueBird)
    .then(() => (db.disconnect()));
};

insertFakeData();