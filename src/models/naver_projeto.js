const {Schema, model} = require('mongoose');

const Naver_ProjetoSchema = new Schema({
    naver:
        { type: Schema.Types.ObjectId, ref: 'Navers' }
    ,
    projeto:
        { type: Schema.Types.ObjectId, ref: 'Projetos' }
    
},{
    timestamps:true
});

module.exports = model('Naver_Projeto', Naver_ProjetoSchema);