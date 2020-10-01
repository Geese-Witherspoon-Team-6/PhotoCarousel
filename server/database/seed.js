const db = require('./index.js');
const Product = require('./Carousel.js');
const faker = require('faker');

// const blueBirdFakeData = new Product({
//   name: 'Blue Bird',
//   photos: ['https://images.app.goo.gl/wp1AnspjSPWQiLcYA']});
const blueBirdFakeData = [];

let id = 1;
while (blueBirdFakeData.length !== 100) {
  let productDoc = {};
  productDoc.productId = id;
  productDoc.name = faker.commerce.productName();
  productDoc.photos = [];
  for (let i = 0; i < 5; i++) {
    productDoc.photos.push(faker.image.imageUrl());
  }

  blueBirdFakeData.push(productDoc);
  id++;
}


const insertFakeData = function () {
  Product.create(blueBirdFakeData)
    .then(() => (db.disconnect()));
};

insertFakeData();