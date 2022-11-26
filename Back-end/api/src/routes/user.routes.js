/**
 * Arquivo: routes/user.routes.js
 * Descricao: arquivo responsavel pelas rotas da api relacionado ao usuario
 * Data: 21/04/2022
 */

// => Aqui vai conter as rotas da api


const router = require('express-promise-router')()
const userController = require('../controllers/user.controller')

// Definindo as rotas

// Rotas API: User    
// Rota para criar novo Usuario -> (POST): localhost:8000/api/users/
router.post('/users', userController.create)

// Rota para selecionar todos os Usuarios -> (GET) localhost:8000/api/users/
router.get('/users', userController.findAll)

// Rota para selecionar Usuarios pelo ID -> (GET) localhost:8000/api/users/:id
router.get('/users/:id', userController.findById)

// Rota para atualizar Usuarios pelo ID -> (PUT) localhost:8000/api/users/:id
router.put('/users/:id', userController.update)

// Rota para deletar Usuarios pelo ID -> (DELETE) localhost:8000/api/users/:id
router.delete('/users/:id', userController.delete)

module.exports = router