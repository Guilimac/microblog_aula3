var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
//jshint

//conexão com o baco de dados
mongoose.connect('mongodb://localhost:27017/microdb', function(err, res) {
    if (err) return console.log(err);
    console.log('banco conectado');
});

//instancia de schema
var Schema = mongoose.Schema;

//schema de usuário para gravação
var UsuarioSchema = new Schema({
    email: { type: String, unique: true },
    senha: String,
    nome: String,
    idade: Number
});

//definição de model de usuário
var Usuario = mongoose.model('usuario', UsuarioSchema);

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function(request, response) {
    response.send('Oi');
});

app.get('/usuario', function(request, response) {
    //retorna usuários cadastrados
    Usuario.find({}, function(err, usuarios) {
        response.json(usuarios);
    });
});

app.get('/usuario/:nome', function(request, response) {
    var nome = request.params.nome;
    Usuario.find({ nome: nome }, function(err, usuarios) {
        if (err) return response.send(err);
        response.json(usuarios);
    });
});
//atualiza usuário
app.put('/usuario/:id', function(request, response) {
    var id = request.params.id;
    Usuario.update({ _id: id }, { $set: request.body }, function(err, result) {
        if (err) return response.send(err);
        response.json(result);
    });
});
//deleta um usuário
app.delete('/usuario', function(request, response) {
    var id = request.body.id;
    Usuario.remove({ _id: id }, function(err, result) {
        if (err) return response.send(err);
        response.json(result);
    });
});

app.post('/usuario', function(request, response) {
    //cadastra novo usuário
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