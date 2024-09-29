// Inicializa um array vazio para armazenar os registros dos alunos.
var alunos = [];

// Função que exibe um menu e lida com a seleção do usuário.
function MENU () {
    var opcoes = parseInt(prompt("Selecione uma opção:  \n1) Cadastrar \n2) Pesquisar \n3) Apresentar \n4) Sair"));

    switch (opcoes) {
        case 1:
            cadastro(); // Chama a função de cadastro de alunos.
            break;
        case 2:
            pesquisa(); // Chama a função para pesquisar um aluno.
            break;
        case 3:
            apresentar(); // Chama a função para apresentar todos os registros.
            break;
        case 4:
            SAIR(); // Chama a função para sair do programa.
            break;
        default:
            alert("Opção inválida, Tente Novamente!"); // Mensagem de erro para opções inválidas.
            MENU(); // Retorna ao menu.
    }
}

// Função para cadastrar alunos.
function cadastro() {
    for (var i = 0; i < 20; i++) { // Loop para cadastrar 20 alunos.
        let nome = prompt("Digite o nome do(a) aluno(a) " + (i + 1) + ":");
        let notas = []; // Inicializa um array para armazenar as notas do aluno.

        for (var j = 1; j <= 4; j++) { // Loop para cadastrar 4 notas.
            let nota;

            while (true) { // Loop para garantir que a nota seja válida.
                nota = parseFloat(prompt("Digite a " + j + "ª nota do(a) aluno(a) " + nome + ":"));
                if (!isNaN(nota) && nota >= 0 && nota <= 10) { // Verifica se a nota é um número válido entre 0 e 10.
                    break; // Sai do loop se a nota for válida.
                } else {
                    alert("Nota inválida. Digite um valor entre 0 e 10."); // Mensagem de erro para notas inválidas.
                }
            }
            notas.push(nota); // Adiciona a nota ao array de notas.
        }

        let aluno = { nome: nome, notas: notas }; // Cria um objeto aluno com nome e notas.
        alunos.push(aluno); // Adiciona o aluno ao array de alunos.
    }

    // Classifica os alunos por nome.
    alunos.sort(function(a, b) { return a.nome.localeCompare(b.nome) });
    alert("Todos os alunos foram cadastrados com sucesso!"); // Mensagem de sucesso.
    MENU(); // Retorna ao menu.
}

// Função para pesquisar um aluno pelo nome.
function pesquisa() {
    let nomePesquisa = prompt("Digite o nome do aluno que deseja buscar:");
    let busca = false; // Flag para verificar se o aluno foi encontrado.

    for (let aluno of alunos) {
        // Compara o nome pesquisado com os nomes cadastrados (ignorando maiúsculas/minúsculas).
        if (aluno.nome.toLowerCase() === nomePesquisa.toLowerCase()) {
            let media = calcularMedia(aluno.notas); // Chama a função para calcular a média.
            let status = media >= 5 ? "Aprovado" : "Reprovado"; // Determina o status com base na média.

            // Mostra os detalhes do aluno encontrado.
            alert("Nome:" + aluno.nome + "\nNotas:" + aluno.notas.join(", ") + "\nMédia:" + media.toFixed(2) + "\nStatus:" + status);
            busca = true; // Altera a flag para verdadeiro, indicando que o aluno foi encontrado.
            break; // Sai do loop.
        }
    }

    if (!busca) {
        alert("Aluno não encontrado."); // Mensagem se o aluno não for encontrado.
    }

    MENU(); // Retorna ao menu.
}

// Função para apresentar todos os registros dos alunos.
function apresentar() {
    if (alunos.length === 0) {
        alert("Nenhum aluno cadastrado."); // Mensagem se não houver alunos.
        MENU(); // Retorna ao menu.
    }

    let resultado = ""; // String para armazenar os resultados.

    for (let aluno of alunos) {
        let media = calcularMedia(aluno.notas); // Calcula a média do aluno.
        let status = media >= 5 ? "Aprovado" : "Reprovado"; // Determina o status.

        // Adiciona os detalhes do aluno à string de resultados.
        resultado += "Nome:" + aluno.nome + "\nNotas:" + aluno.notas.join(", ") + "\nMédia:" + media.toFixed(2) + "\nStatus:" + status + "\n\n";
    }

    alert(resultado); // Mostra todos os registros.
    MENU(); // Retorna ao menu.
}

// Função para calcular a média das notas.
function calcularMedia(notas) {
    let soma = 0; // Inicializa a soma das notas.

    for (let nota of notas) {
        soma += nota; // Soma todas as notas.
    }
    return soma / notas.length; // Retorna a média.
}

// Função para sair do programa.
function SAIR() {
    alert("Obrigado por utilizar este programa!"); // Mensagem de despedida.
    window.location.href = "https://youtu.be/Ct6BUPvE2sM?si=9dU1bkaf4pDnefIW"; // Redireciona para um link.
}

// Inicia o programa chamando o menu.
MENU();
