
const matriculaHandler = require('../handler/matricula-handler')

module.exports = {

    async store(req,res){
        return res.send(await matriculaHandler(req.body));
    }

}