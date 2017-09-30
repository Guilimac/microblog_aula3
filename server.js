var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
//jshint

mongoose.connect('mongodb://localhost:27017/microdb', function(err, res) {
    if (err) return console.log(err);
    console.log('banco conectado');
});

var Schema = mongoose.Schema;

var UsuarioSchema = new Schema({
    email: String,
    senha: String,
    nome: String,
    idade: Number
});

var Usuario = mongoose.model('usuario', UsuarioSchema);

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function(request, response) {
    Usuario.find({}, function(err, usuarios) {
        response.json(usuarios);
    });
});

app.post('/', function(request, response) {
    var usuario = new Usuario({
        email: request.body.email,
        senha: request.body.senha,
        nome: request.body.nome,
        idade: request.body.idade
    });
    usuario.save(function(err, result) {
        if (err) response.send(err);
        response.json(result);
    });
});

app.listen(3000, function() {
    console.log('iniciou!');
});