var express = require('express');
var app = express();
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/board')

app.configure(function() {
    // log every request to the console
    app.use(express.logger('dev'));
    // pull information from html in POST
    app.use(express.bodyParser());
    // simulate DELETE and PUT
    app.use(express.methodOverride());
});

app.listen(9000);

app.get('/', function(req, res) {

    // use mongoose to get all todos in the database
    res.sendfile("./public/index.html");
});