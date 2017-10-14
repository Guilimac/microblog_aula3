var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var config = require('./config');
var api = require('./api');
//jshint

//conexão com o baco de dados
mongoose.connect(config.dburl, function(err, res) {
    if (err) return console.log(err);
    console.log('banco conectado');
});

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function(request, response) {
    response.send('Oi');
});

app.use('/api',api);


app.listen(config.port, function() {
    console.log('iniciou!');
});