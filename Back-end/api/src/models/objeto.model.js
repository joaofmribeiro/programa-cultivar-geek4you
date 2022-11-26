/**
 * Arquivo: models/objetos.js
 * Descricao: Arquivo responsavel pelo modelo da classe 'Objetos' da aplicacao
 * Data: 20/04/2022
 */

/**
 * Classe: Objeto
 * id: (Number - guid gerado pelo MongoDB)
 * nomeObjeto: String
 * localizacao: String
 * descricao: String
 * valor: Number
 * caminhoImg: String
 */

const mongoose = require('mongoose')

const Schema = mongoose.Schema

const objetoSchema = new Schema({
    nomeObjeto: { type: String, required: true, maxlength: 30},
    localizacao: {type: String, required: true, maxlength: 15},
    descricao: {type: String, required: true, maxlength: 75},
    valor: {type: Number, required: true},
    caminhoImg: {type: String, required: true}
}, {
    timestamps: true,
    collection: 'objetos',
})

module.exports = mongoose.model('Objeto', objetoSchema)