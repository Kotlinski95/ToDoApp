"use strict";

var express = require('express');

var todoController = require('./controllers/todoController');

var app = express(); //set up tepmplate engine

app.set('view engine', 'ejs'); //static files:

app.use('/assets', express["static"]('./public')); //listen to port

app.listen(3000);
console.log('You are listening to port 3000'); //fire todocontroller function

todoController(app);