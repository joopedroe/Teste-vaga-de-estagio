const axios = require('axios');
const Navers = require('../models/navers');
const Naver_Projeto = require('../models/naver_projeto');
const Projetos = require('../models/projetos');

module.exports =
{
    async store(req, res){
        const { nome, dataNascimento, cargo, dataAdmicao, projetos} = req.body;
        
    
        
        const naver = await Navers.create({
            nome,
            dataNascimento,
            cargo,
            dataAdmicao,
            projetos

        })
        
        return res.json(naver);
    },
    
    async index(req, res){
        const listaNavers = await Navers.find();
        return res.json(listaNavers);

    },
    async show(req, res){
        const projets=[]
        const id = req.params.id;
        var naver = await (await Navers.findById({_id:id}));
        const projetos= await (await Naver_Projeto.find({naver:id}).select('projeto -_id'))
        for(item in projetos){
            const projeto = await Projetos.findById({_id:projetos[item].projeto});
            console.log(projeto)
            projets.push(projeto) 
        }
        naver.projetos=projets
        console.log(projets)
        return res.json(naver);
    }
};