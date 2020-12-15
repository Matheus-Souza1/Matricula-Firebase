const { Router } = require('express');
const alunoController = require('../controller/aluno-controller');

const app = Router();

app.get('/aluno', alunoController.index );
app.get('/aluno/:id', alunoController.show );
app.post('/aluno', alunoController.store );
app.put('/aluno/:id', alunoController.update );
app.delete('/aluno/:id', alunoController.destroy );

module.exports = app;