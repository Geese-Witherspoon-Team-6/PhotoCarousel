const db = require('./database/index.js');
const express = require('express');
const bodyParser = require('body-parser');
const Product = require('./database/Carousel.js');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/../client/dist'))

app.get('/api/carousel/:productId', (req, res) => {
  Product.find({productId: req.params.productId}, (err, product) => {
    if (err) {
      return console.error(err);
    }
    console.log(product);
    res.send(product)
  })
});

const port = 3000;
app.listen(port, () => {
  console.log(`server listening to port ${port}`);
})


module.exports = app;