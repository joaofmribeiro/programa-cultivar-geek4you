/**
 * Arquivo: src/app.js
 * Descricao: arquivo responsavel por toda a configuracao da aplicacao(backend)
 * Data: 19/04/2022
 */

const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const morgan = require('morgan')
const cors = require('cors')

const app = express()

// Importar o arquivo: 'database.js'
const localDatabase = require('./config/database')              // Local: MongoDb
const databaseCosmosDb = require('./config/databaseCosmosDb')   // Nuvem: CosmosDb

mongoose.Promise = global.Promise

// => Conexao com a base de dados
mongoose.connect(localDatabase.local.localUrl, { useNewUrlParser: true }).then(() => {
    console.log('A Base de Dados foi conectada com sucesso')
},  (err) => {
    console.log('Erro ao conectar com a Base de Dados:  ${err}')
    process.exit()
})

// => Rotas
const objetoRoute = require('./routes/objeto.routes')
const userRoute = require('./routes/user.routes')

app.use(bodyParser.urlencoded({ extended: true }))  
app.use(bodyParser.json())
app.use(bodyParser.json({ type: 'application/vnd.api+json' }))
app.use(morgan('dev'))
app.use(cors())

app.use('/api/', userRoute)
app.use('/api/', objetoRoute)

 module.exports = app