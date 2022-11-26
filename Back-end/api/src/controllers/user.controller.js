/**
 * Arquivo: src/controllers/user.controller.js
 * Descricao: arquivo responsavel pelo CRUD da classe 'user'
 * Data: 21/04/2022
 */

 const User = require('../models/user.model')

 // Metodo responsavel por criar um novo Usuario
 exports.create = async (req, res) => {
     const newUser = new User(req.body)
     const user = await newUser.save()
     return res.status(201).send({ message: 'Usuario criado com sucesso', user})
 }
 
 // Metodo responsavel por selecionar todos os Usuarios
 exports.findAll = async (req, res) => {
     const users = await User.find({})
     return res.status(200).send(users)
 }
 
 // Metodo resposnsavel por selecionar Usuario pelo ID
 exports.findById = async (req, res) => {
     const user = await User.findById(req.param.id)
     return res.status(200).send(user)
 }
 
 // Metodo responsavel por atualizar Usuario pelo ID
 exports.update = async (req, res) => {
     if(!req.body.nome || !req.body.email || !req.body.login || !req.body.senha){
         return res.status(400).send({ message: 'Os campos nao podem ser vazios'})
     }
     const user = await User.findByIdAndUpdate(req.params.id, req.body)
     return res.status(200).send({ message: 'Usuario atualizado com sucesso', user})
 }
 
 // Metodo responsavel por excluir Usuario pelo ID
 exports.delete = async (req, res) => {
     const user = await User.findByIdAndDelete(req.params.id)
     return res.status(200).send({ message: 'Usuario deletado com sucesso', user})
 }
 