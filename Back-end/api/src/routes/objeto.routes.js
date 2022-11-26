/**
 * Arquivo: routes/objeto.routes.js
 * Descricao: arquivo responsavel pelas rotas da api relacionado ao objeto
 * Data: 19/04/2022
 */

// => Aqui vai conter as rotas da api


const router = require('express-promise-router')()
const objetoController = require('../controllers/objeto.controller')

// Definindo as rotas

// Rotas API: Objeto    
// Rota para criar novo Objeto -> (POST): localhost:8000/api/objetos/
router.post('/objetos', objetoController.create)

// Rota para selecionar todos os Objetos -> (GET) localhost:8000/api/objetos/
router.get('/objetos', objetoController.findAll)

// Rota para buscar Objetos -> (GET) localhost:8000/api/objetos/busca
router.get('/objetos/busca', objetoController.buscarObjeto)

// Rota para selecionar Objetos pelo ID -> (GET) localhost:8000/api/objetos/:id
router.get('/objetos/:id', objetoController.findById)

// Rota para atualizar Objeto pelo ID -> (PUT) localhost:8000/api/objetos/:id
router.put('/objetos/:id', objetoController.update)

// Rota para deletar Objeto pelo ID -> (DELETE) localhost:8000/api/objetos/:id
router.delete('/objetos/:id', objetoController.delete)

module.exports = router