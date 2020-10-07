const request = require('supertest');
const express = require('express');
const app = require('../server/app.js');
const Product = require('../server/database/Carousel.js');
const testData = require('./testingData.js');
const mongoose = require('mongoose');

beforeAll(async () => {
  await mongoose.connection.close();
  await mongoose.connect('mongodb://localhost/testingApi');
})


beforeEach(async () => {
  await Product.create(testData)
});

afterEach(async () => {
  await mongoose.connection.db.dropCollection('products')
});

afterAll(async () => {
  await mongoose.connection.db.dropDatabase()
  await mongoose.connection.close()
});


describe('Test API Endpoint For PhotoCarousel', function () {

  it('product should exist', async () => {
    const res = await request(app).get('/api/carousel/1');
    expect(typeof res.body).toBe('object');
    // console.log(res.body);
    expect(Object.keys(res.body).length).toBe(7);
    expect(Object.keys(res.body).includes('name')).toBe(true);
    expect(Object.keys(res.body).includes('photos')).toBe(7);
    expect(Object.keys(res.body).includes('productId')).toBe(7);
  });

  it('Product Values Should Match the Document Values in the DB', async () => {
    const res = await request(app).get('/api/carousel/1');
    const productDocument = await Product.find({productId: 1}, (err, product) => {
      if (err) {
        return console.error(err);
      }
      return product;
    })

    expect(res.body.name).toBe(productDocument.name);
    expect(res.body.productId).toBe(productDocument.productId);
    for (let i = 0; i < res.body.photos.length; i++) {
      expect(res.body.photos[i]).toBe(productDocument.photos[i]);
    }

  });
});

