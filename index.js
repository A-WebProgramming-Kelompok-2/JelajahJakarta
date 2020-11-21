const express = require('express'),
    app = express(),
    bodyparser= require('body-parser');

app.set('view engine','ejs');

app.use(express.static('public'));
app.use(bodyparser.urlencoded());

const port = process.env.port || 8000;

//routes
const indexRoutes = require('./routes/index');
const authRoutes = require('./routes/auth');
app.use('/', indexRoutes);
app.use('/auth', authRoutes);

app.listen(port);
console.log(`successfully run on ${port}`);