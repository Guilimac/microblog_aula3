var Usuario = require('./models/usuario');

function UsuarioController() {}

UsuarioController.prototype.getAll = function(request, response) {
    Usuario.find({}, function(err, usuarios) {
        response.json(usuarios);
    });
};

UsuarioController.prototype.getByName = function(request, response) {
    var nome = request.params.nome;
    Usuario.find({ nome: nome }, function(err, usuarios) {
        if (err) return response.send(err);
        response.json(usuarios);
    });
};

UsuarioController.prototype.putUser = function(request, response) {
    var id = request.params.id;
    Usuario.update({ _id: id }, { $set: request.body }, function(err, result) {
        if (err) return response.send(err);
        response.json(result);
    });
};

UsuarioController.prototype.postUser = function(request, response) {

    var usuario = new Usuario({
        email: request.body.email,
        senha: request.body.senha,
        nome: request.body.nome,
        idade: request.body.idade
    });
    usuario.save(function(err, result) {
        if (err) return response.send(err);
        response.json(result);
    });
};

UsuarioController.prototype.deleteUser = function(request, response) {
    var id = request.body.id;
    Usuario.remove({ _id: id }, function(err, result) {
        if (err) return response.send(err);
        response.json(result);
    });
};


module.exports = new UsuarioController();