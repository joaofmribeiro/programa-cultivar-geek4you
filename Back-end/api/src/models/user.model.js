/**
 * Arquivo: models/objetos.js
 * Descricao: Arquivo responsavel pelo modelo da classe 'User' da aplicacao
 * Data: 21/04/2022
 */

 const mongoose = require('mongoose')

 const Schema = mongoose.Schema

 const userSchema = new Schema({
     nome: {type: String, required: true, maxlength: 50},
     email: {type: String, required: true, maxlength: 30},
     login: {type: String, required: true, maxlength: 15},
     senha: {type: String, required: true, maxlength: 20},
 }, {
     timestamps: true,
     collection: 'users',
 })
 
 module.exports = mongoose.model('User', userSchema)