const express = require('express');

const adminRoute = require('./routers/admin.js');
const shopRoute = require('./routers/shop.js');
const app = express();
const path = require('path');

//configuring pug templating engine
app.set('view engine', 'pug');
app.set('views', 'views');

//app.use(bodyParser(urlencoded({ extended: false })));
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

//enabling the public folder
app.use(express.static(path.join(__dirname, 'public')));

//Filtering Routes
/* app.use('/member', adminRoute);
app.use('/member', shopRoute); */

app.use('/admin', adminRoute.route);
app.use(shopRoute);

/* app.use('/', (req, res, next) => {
  res.send('<h1>Welcome to our home page</h1>');
}); */

app.use((req, res, next) => {
  //res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
  res.status(404).render('404', { title: '404 Err Page' });
});
app.listen(3000);
