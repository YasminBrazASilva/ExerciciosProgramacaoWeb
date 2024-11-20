const professorModel = require('../models/professor')

/* 1. (1,0) Listar todos os professores
Método: GET
Endpoint: /professores
Descrição: Retorna todos os professores com suas respectivas informações */
exports.obterTodos = async (req, res) => {
    try {
        const professores = await professorModel.find();
        res.status(200).json(professores);

    } catch (error) {
        res.status(500).json({ error: error });
    }
};

// TESTE: http://localhost:3000/professores



/* 2. (1,0) Buscar um professor por ID
Método: GET
Endpoint: /professores/:id
Descrição: Retorna as informações de um professor específico, incluindo suas turmas e turmas ministradas */

exports.obterProfessor = async (req, res) => {
    try {
        const professor = await professorModel.findOne({ id: req.params.id });
        res.status(200).json(professor);

    } catch (error) {
        res.status(500).json({ error: error });
    }
};

// TESTE: http://localhost:3000/professores/2



/* 3. (1,0) Listar todas as turmas de um professor
Método: GET
Endpoint: /professores/:id/turmas
Descrição: Retorna todas as turmas ministradas por um professor específico, com a lista de alunos e disciplina associada. */

exports.obterTurmasDoProfessor = async (req, res) => {
    try {
        const professor = await professorModel.findOne({ id: req.params.id });
        res.status(200).json({ turmas: professor.turmas });

    } catch (error) {
        res.status(500).json({ error: error });
    }
};

// TESTE : http://localhost:3000/professores/2/turmas



/* 4. (2,0) Atualizar dados de um professor
Método: PUT
Endpoint: /professores/:id
Descrição: Permite atualizar as informações de um professor específico, como nome, idade e departamento. Se for informado um id inválido retornar “Id não existente” */

exports.alterarProfessor = async (req, res) => {
    try {
        const novaInformacao = req.body;
        const chaves = Object.keys(novaInformacao);

        const professor = await professorModel.findOne({ id: req.params.id });

        if (!professor) {
            return res.status(404).json({ message: "Id não existe" });
        } 

        chaves.forEach(chave => {
            professor[chave] = novaInformacao[chave]
        });

        await professor.save();
        res.status(200).json(professor);

    } catch (error) {
        res.status(500).json({ error: error });
    }
};

// TESTE : http://localhost:3000/professores/1
/* BODY: {
    "id": "1",
    "nome": "Prof. Carlus",
    "idade": 40,
    "departamento": "Matematica",
    "turmas": [
      {
        "codigo": "9A",
        "disciplina": "MAT101",
        "alunos": [
          "João",
          "Maria",
          "Pedro"
        ]
      },
      {
        "codigo": "10A",
        "disciplina": "MAT201",
        "alunos": [
          "Ana",
          "Luiz"
        ]
      }
    ]
  }*/



/* 5. (1,0) Adicionar uma turma para um professor
Método: POST
Endpoint: /professores/:id/turmas
Descrição: Permite adicionar uma nova turma para o professor, especificando o código da turma, disciplina e lista de alunos. */

exports.adicionarTurmaParaProfessor = async (req, res) => {
    try {
        const novaTurma = req.body;

        const professor = await professorModel.findOne({ id: req.params.id });
        professor.turmas.push(novaTurma);

        await professor.save();
        res.status(200).json(professor);

    } catch (error) {
        res.status(500).json({ error: error });
    }
};

// TESTE : http://localhost:3000/professores/3/turmas
/* BODY: { "codigo": "10A", "disciplina": "MAT201", "alunos": ["Ana", "Luiz"] } */



/* 6. (1,0) Listar professores por departamento
Método: GET
Endpoint: /professores/departamento/:departamento
Descrição: Retorna todos os professores de um departamento específico */

exports.obterProfessoresPorDepartamento = async (req, res) => {
    try {
        const professores = await professorModel.find({ departamento: req.params.departamento });
        res.status(200).json({ professores });

    } catch (error) {
        res.status(500).json({ professores });
    }
};

// TESTE : http://localhost:3000/professores/departamento/dado


/* 7. (2,0) Remover um professor
Método: DELETE
Endpoint: /professores/:id
Descrição: Remove um professor, dado o seu código. Se for informado um id inválido retornar “Id não existente” */

exports.deletarProfessor = async (req, res) => {
    try {
        const professorDeletado = await professorModel.findOneAndDelete({ id: req.params.id });
        
        if (!professorDeletado) {
            return res.status(404).json({ message: "Id não existe" });
        }

        res.status(200).json({ message: "Professor deletado com sucesso", professor: professorDeletado });

    } catch (error) {
        res.status(500).json({ error: error });
    }
};

// TESTE: http://localhost:3000/professores/2
// TESTE: http://localhost:3000/professores/4