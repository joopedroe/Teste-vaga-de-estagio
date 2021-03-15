const {Schema, model} = require('mongoose');

const ProjetosSchema = new Schema({
    titulo:{
        type: String,
        required:true,
    },
    naver:
        [{ type: Schema.Types.ObjectId, ref: 'Navers' }]
    ,
    },{
    timestamps:true
});

module.exports = model('Projetos', ProjetosSchema);