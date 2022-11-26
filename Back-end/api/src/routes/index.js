/**
 * Arquivo: src/routes/index.js
 * Descricao: Arquivo responsavel pela chamada da  Api
 * Data: 19/04/2022
 */

const express = require('express')
const router = express.Router()

router.get('/' , (req, res) => {
    res.status(200).send({
        success: 'true',
        message: 'Seja Bem-Vindo(a)',
        version: '1.0.0',
    })
})

module.exports = router