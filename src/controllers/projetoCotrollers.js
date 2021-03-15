const axios = require('axios');
const Projetos = require('../models/projetos');
const Naver_Projeto = require('../models/naver_projeto');
const Navers = require('../models/navers');


module.exports =
{
    async store(req, res){
        const { titulo, naver} = req.body;
        
    
        
        const projetos = await Projetos.create({
            titulo,
            naver,
        })
        return res.json(projetos);
    },
    
    async index(req, res){
        const listaProjetos = await Projetos.find();
        return res.json(listaProjetos);

    },
    async show(req, res){
        const lista_navers=[]
        const id = req.params.id;
        let projetos = await Projetos.findById({_id:id});
        const navers= await (await Naver_Projeto.find({projeto:id}).select('naver -_id'))
        for(item in navers){
            const naver = await Navers.findById({_id:navers[item].naver}).select('nome dataNacimento');
            lista_navers.push(naver)
        }
    
        projetos.naver=lista_navers
        return res.json(projetos);
    }
};