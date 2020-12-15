const Curso = require('../repository/curso-repository');

module.exports = {

    async index(req, res) {
        return res.status(200).send(await Curso.obterTodos());
    },

    async show(req, res) {
        return res.status(200).send(await Curso.obterPorId(req.params.id));
    },

    async store(req, res) {
        return res.status(200).send(await Curso.criar(req.body.id, req.body));
    },

    async update(req, res) {
        return res.status(200).send(await Curso.atualizar(req.params.id, req.body));
    },

    async destroy(req, res) {
        return res.status(200).send(await Curso.deletarCurso(req.params.id));
    },

}