const express = require('express'),
    app = express(),
    bodyparser= require('body-parser');

app.set('view engine','ejs');

app.use(express.static('public'));
app.use(bodyparser.urlencoded());

const port = process.env.port || 8000;

//routes
const indexRoutes = require('./routes/index');
app.use('/', indexRoutes);

app.listen(port);
console.log(`successfully run on ${port}`);