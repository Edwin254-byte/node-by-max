const express = require('express');
const route = express.Router();
const path = require('path');
const rootDir = require('../util/path.js');

// /admin/add-product => GET
route.get('/add-product', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
});

// /admin/add-product => POST
route.post('/add-product', (req, res, next) => {
  console.log(req.body);
  res.redirect('/');
});

module.exports = route;
