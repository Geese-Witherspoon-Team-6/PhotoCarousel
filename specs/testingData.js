const faker = require('faker');

const photoCarouselTest = {
  name: 'blueBird',
  photos: [],
  productId: 1
};

for (let i = 0; i < 5; i++) {
  photoCarouselTest.photos.push(faker.image.imageUrl());
}

module.exports = photoCarouselTest;