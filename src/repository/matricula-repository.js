
const admin = require('../config/firebase');

const Db = admin.firestore();
const collection = 'matricula';

async function criar(id, crud){
    await Db.collection(collection).doc(id).set(crud);
    
}

module.exports = {criar};