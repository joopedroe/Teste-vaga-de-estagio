const Navers = require('../models/navers');
const Naver_Projeto = require('../models/naver_projeto');

module.exports =
{
    async store(req, res){
        const { naver, projeto} = req.body;
        
    
        const relacao=await Naver_Projeto.create({
            naver,
            projeto
        })
        return res.json(relacao);
    },
    
};