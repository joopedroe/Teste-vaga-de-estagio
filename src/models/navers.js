const {Schema, model} = require('mongoose');

const NaversSchema = new Schema({
    nome:{
        type: String,
        required:true,
    },
    dataNascimento:{
        type: Date,
        required:true,
    },
    cargo:{
        type: String,
        required:false,
    },
    dataAdmicao:{
        type: Date,
        required:true,
    },
    projetos:
        [{ type: Schema.Types.ObjectId, ref: 'Projetos' }]
    ,
    
},{
    timestamps:true
});

module.exports = model('Navers', NaversSchema);



