const mongoose = require('mongoose');
const professor = mongoose.model('Professor', {
    id: Number,
    nome: String,
    idade: Number, 
    departamento: String,
    turmas: [
        {
            codigo: String,
            disciplina: String,
            alunos: [String]
        }
    ]
})
module.exports = professor;