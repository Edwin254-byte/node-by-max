const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

app.use('/user', (req, res, next) => {
  res.sendFile(path.join(__dirname, 'user.html'));
});

app.use('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(3000);
