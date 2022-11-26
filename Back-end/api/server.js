/**
 * Arquivo: server.js
 * Descricao: arquivo responsavel por toda a configuracao da aplicacao(backend)
 */

const app = require('./src/app')

const port = process.env.PORT || 8000


app.listen(port)
console.log('Aplicacao executando na porta', port)