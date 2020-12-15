
const matriculaHandler = require('../utils/random')

module.exports = {

    async store(req,res){
        return res.send(await matriculaHandler(req.body));
    }

}