/**
 * Arquivo: src/controllers/objeto.controller.js
 * Descricao: arquivo responsavel pelo CRUD da classe 'objeto'
 * Data: 20/04/2022
 */

const Objeto = require('../models/objeto.model')

// Metodo responsavel por criar um novo objeto
exports.create = async (req, res) => {
    const novoObjeto = new Objeto(req.body)
    const objeto = await novoObjeto.save()
    return res.status(201).send({ message: 'Objeto criado com sucesso', objeto})
}

// Metodo responsavel por selecionar todos os Objetos
exports.findAll = async (req, res) => {
    const objetos = await Objeto.find({})
    return res.status(200).send(objetos)
}

// Metodo resposnsavel por selecionar objeto pelo ID
exports.findById = async (req, res) => {
    const objeto = await Objeto.findById(req.param.id)
    return res.status(200).send(objeto)
}

// Metodo responsavel por atualizar objeto pelo ID
exports.update = async (req, res) => {
    if(!req.body.nomeObjeto || !req.body.localizacao){
        return res.status(400).send({ message: 'Os campos nao podem ser vazios'})
    }
    const objeto = await Objeto.findByIdAndUpdate(req.params.id, req.body)
    return res.status(200).send({ message: 'Objeto atualizado com sucesso', objeto})
}

// Metodo responsavel por excluir Objeto pelo ID
exports.delete = async (req, res) => {
    const objeto = await Objeto.findByIdAndDelete(req.params.id)
    return res.status(200).send({ message: 'Objeto deletado com sucesso', objeto})
}

// Metodo responsavel por buscar Objeto
exports.buscarObjeto = async (req, res) => {
    const busca = await req.query.pesquisa
    
    Objeto.find({'nomeObjeto': {$regex: busca, $options: 'i' }}, {}, (err, Objeto) => {
        if (err) {
            res.status(500).send({ message: 'Nenhum objeto encontrado para a busca'})
        } else {
            res.status(200).send(Objeto);
        }
    })
}