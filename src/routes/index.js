const aluno = require('./aluno');
const curso = require('./curso');
const matricula = require('./matricula');

module.exports = app =>{
    app.use(
        aluno,
        curso,
        matricula,
    )
}