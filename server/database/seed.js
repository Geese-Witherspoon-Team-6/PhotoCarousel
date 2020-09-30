// const db = require('./index.js');
// const Product = require('./Carousel.js');
const faker = require('faker');

const blueBirdFakeData = [];

// I am currently using a while loop here and could refactor to a for loop. I had used the while loop before I realized I wanted to manually assign the id for each product instead of using the one created by mongoose.
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