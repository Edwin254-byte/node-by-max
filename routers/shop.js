const express = require('express');
const path = require('path');
const rootDir = require('../util/path.js');
const adminRoute = require('./admin.js');

const route = express.Router();

route.get('/', (req, res, next) => {
  console.log('shop js', adminRoute.products);
  //res.sendFile(path.join(rootDir, 'views', 'shop.html'));
  res.render('shop', { prods: adminRoute.products, title: 'Shop', path: '/' });
});

module.exports = route;
