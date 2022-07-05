const express = require('express');
const path = require('path');
const adminRoute = require('./admin.js');

const route = express.Router();

route.get('/', (req, res, next) => {
  console.log('shop js', adminRoute.products);
  const products = adminRoute.products;
  res.render('shop', {
    prods: products,
    title: 'Shop',
    path: '/',
  });
});

module.exports = route;
