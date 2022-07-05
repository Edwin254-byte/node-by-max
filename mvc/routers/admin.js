const express = require('express');
const route = express.Router();
const path = require('path');

const products = [];

// /admin/add-product => GET
route.get('/add-product', (req, res, next) => {
  res.render('add-product', {
    title: 'Add Product',
    path: '/admin/add-product',
  });
});

// /admin/add-product => POST
route.post('/add-product', (req, res, next) => {
  products.push({ title: req.body.title });
  res.redirect('/');
});

module.exports = { route, products };
