const admin = require('../config/firebase');

const Db = admin.firestore();
const collection = 'curso';

async function criar(id, crud){
    await Db.collection(collection).doc(id).set(crud);
    
}
async function atualizar(id, crud){
    await Db.collection(collection).doc(id).update(crud);

}
async function deletarCurso(id){
    await Db.collection(collection).doc(id).delete();

}
async function obterTodos(){
    let crud = await Db.collection(collection).get().then(docs => docs);
    return crud.docs.map(e => e.data());
}
async function obterPorId(id){
    let crud = await Db.collection(collection).doc(id).get();
    return crud.data();
}


module.exports = {criar,atualizar,deletarCurso,obterTodos,obterPorId};