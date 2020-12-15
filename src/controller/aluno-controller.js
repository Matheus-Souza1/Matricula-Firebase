const Aluno = require('../repository/aluno-repository');

module.exports = {

    async index(req,res){
        return res.status(200).send(await  Aluno.obterTodos());
    },

    async show(req,res){
        return res.status(200).send(await  Aluno.obterPorId(req.params.id));
    },

    async store(req,res){
        return res.status(200).send(await  Aluno.criar(req.body.matricula,req.body));
    },

    async update(req,res){
        return res.status(200).send(await  Aluno.atualizar(req.params.id,req.body));
    },

    async destroy(req,res){
        return res.status(200).send(await  Aluno.deletarAluno(req.params.id));
    },

}