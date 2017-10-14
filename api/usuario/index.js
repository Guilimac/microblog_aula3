var express = require('express');
var router = express.Router();

var Usuario = require('./models/usuario');

router.get('/', function(request, response) {
    //retorna usuários cadastrados
    Usuario.find({}, function(err, usuarios) {
        response.json(usuarios);
    });
});

router.get('/:nome', function(request, response) {
    var nome = request.params.nome;
    Usuario.find({ nome: nome }, function(err, usuarios) {
        if (err) return response.send(err);
        response.json(usuarios);
    });
});
//atualiza usuário
router.put('/:id', function(request, response) {
    var id = request.params.id;
    Usuario.update({ _id: id }, { $set: request.body }, function(err, result) {
        if (err) return response.send(err);
        response.json(result);
    });
});
//deleta um usuário
router.delete('/', function(request, response) {
    var id = request.body.id;
    Usuario.remove({ _id: id }, function(err, result) {
        if (err) return response.send(err);
        response.json(result);
    });
});

router.post('/', function(request, response) {
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

module.exports = router;