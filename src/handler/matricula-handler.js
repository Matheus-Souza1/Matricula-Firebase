const alunoRepository = require('../repository/aluno-repository');
const cursoRepository = require('../repository/curso-repository');
const matriculaRepository = require('../repository/matricula-repository');
const random = require('../utils/random');


async function Matricular(matricula){
    let aluno = await alunoRepository.obterPorId(matricula.aluno);
    if(!aluno){
        return {success:false, message:'Aluno nao cadastrado' }
    }

    let curso = await cursoRepository.obterPorId(matricula.curso);
    if(!curso){
        return {success:false, message:'curso nao cadastrado' }
    }

    let matricular = {
        id_aluno: matricula.aluno,
        id_curso: matricula.curso,
        id: random(1000, 9999),
        
     }

     await matriculaRepository.criar(matricular.id.toString(), matricular);
     return {success:true, message:`O aluno ${aluno.nome} foi cadastrado no curso ${curso.descricao}.`,data: matricular.id }

}

module.exports = Matricular;