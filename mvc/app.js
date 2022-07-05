const express = require('express');

const adminRoute = require('./routers/admin.js');
const shopRoute = require('./routers/shop.js');
const app = express();
const path = require('path');

//configuring ejs
app.set('view engine', 'ejs');
app.set('views', 'views');

//parsing request body
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

//enabling the public folder
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoute.route);
app.use(shopRoute);

app.use((req, res, next) => {
  res.status(404).render('404', { title: '404 Err Page' });
});
app.listen(3000);
