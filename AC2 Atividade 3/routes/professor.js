const express = require('express');
const router = express.Router();
const professorController = require('../controllers/professorController.js');

// Rota paid obter todos os usuários
router.get('/', professorController.obterTodos);
router.get('/:id', professorController.obterProfessor);
router.get('/:id/turmas', professorController.obterTurmasDoProfessor);
router.put('/:id', professorController.alterarProfessor);
router.post('/:id/turmas', professorController.adicionarTurmaParaProfessor);
router.get('/departamento/:departamento', professorController.obterProfessoresPorDepartamento)
router.delete('/:id', professorController.deletarProfessor);

module.exports = router;
