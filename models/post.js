var mongoose = require('mongoose');

//instancia de schema
var Schema = mongoose.Schema;

//definição do Schema do post
var PostSchema = new Schema({
    texto: String,
    tags: [String],
    usuario: {
        type: Schema.Types.ObjectId,
        ref: 'usuario'
    }
});

//definição da model de post
module.exports = mongoose.model('post', PostSchema);