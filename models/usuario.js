var mongoose = require('mongoose');

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
module.exports = mongoose.model('usuario', UsuarioSchema);