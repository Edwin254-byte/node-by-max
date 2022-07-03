//using express
const express = require('express');
const app = express();

app.use('/users', (req, res, next) => {
  res.send('<h1>Message From our users</h1>');
});
app.use('/', (req, res, next) => {
  res.send('<h1>Hello again</h1>');
});

app.listen(3000);
