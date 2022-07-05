const express = require('express');
const path = require('path');
const rootDir = require('../util/path.js');
const adminRoute = require('./admin.js');

const route = express.Router();

route.get('/', (req, res, next) => {
  console.log('shop js', adminRoute.products);
  //res.sendFile(path.join(rootDir, 'views', 'shop.html'));
  const products = adminRoute.products;
  res.render('shop', {
    prods: products,
    title: 'Shop',
    path: '/',
    hasProducts: products.length > 0,
    activeShop: true,
    productCSS: true,
  });
});

module.exports = route;
