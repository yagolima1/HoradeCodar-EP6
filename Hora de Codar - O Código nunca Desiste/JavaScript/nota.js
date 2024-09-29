// Considerando a necessidade de um programa que armazene o nome e as notas bimestrais de 20 alunos do curso de Técnicas de Programação, defina a estrutura de registro apropriada, o diagrama de blocos e a codificação de um programa que, por meio do uso de um menu de opções, execute as seguintes etapas:                                   a) Cadastrar os 20 registros (após o cadastro efetuar a classificação por nome).                                   b) Pesquisar os 20 registros, de cada vez, pelo campo nome. Nesta pesquisa o programa deverá também apresentar a média do aluno e as mensagens: “Aprovado” caso sua média seja maior ou igual a 5, ou “Reprovado” para média abaixo de 5.                                                                                                              c) Apresentar todos os registros, médias e a mensagem de aprovação ou reprovação.                                  d) Sair do programa de cadastro.

var alunos = [];

function MENU (){
    var opcoes = parseInt(prompt("1) Cadastrar \n2) Pesquisar \n3) Apresentrar \n4) Sair"));

    switch (opcoes){

        case 1:
            cadastro();
            break;

        case 2:
            pesquisa();
            break;
            
        case 3:
            apresentar();
            break;

        case 4:
            SAIR();
            break;

        default:
            alert("Opção inválida, Tente Novamente!");
            MENU();
    }
}

function  cadastro(){

    for (var i = 0; i < 20; i++) {

        let nome = prompt("Digite o nome do(a) aluno(a) " + (i + 1) + ":");
    
        let notas = [];

        for (var j = 1; j <= 4; j++) {

          let nota;

          while (true) {

            nota = parseFloat(prompt("Digite a " + j + "ª nota do(a) aluno(a) " + nome + ":"));
            if (!isNaN(nota) && nota >= 0 && nota <= 10) {

              break;
            } 
            
            else {

              alert("Nota inválida. Digite um valor entre 0 e 10.");

            }

          }
          notas.push(nota);
        }
    

        let aluno = { nome: nome, notas: notas };
        alunos.push(aluno);
      }
    

      alunos.sort(function(a, b) { return a.nome.localeCompare(b.nome) });
    
      alert("Todos os alunos foram cadastrados com sucesso!");

      MENU();
    }

function pesquisa(){

    let nomePesquisa = prompt("Digite o nome do aluno que deseja buscar:");

    let busca = false;

    for (let aluno of alunos) {

    if (aluno.nome.toLowerCase() === nomePesquisa.toLowerCase()) {

      let media = calcularMedia(aluno.notas);

      let status = media >= 5 ? "Aprovado" : "Reprovado";

      alert("Nome:" + aluno.nome + "\nNotas:" + aluno.notas.join(", ") + "\nMédia:" + media.toFixed(2) + "\nStatus:" + status );

      busca = true;

      break;
    }
  }

  if (!busca) {

    alert("Aluno não encontrado.");

  }

  MENU();
}

function apresentar(){

if (alunos.length === 0) {

    alert("Nenhum aluno cadastrado.");
    MENU();
    
  }

  let resultado = "";

  for (let aluno of alunos) {

    let media = calcularMedia(aluno.notas);

    let status = media >= 5 ? "Aprovado" : "Reprovado";

    resultado += "Nome:" + aluno.nome + "\nNotas:" + aluno.notas.join(", ") + "\nMédia:" + media.toFixed(2) + "\nStatus:" + status + "\n\n";
  }

  alert(resultado);
  MENU();
}

function calcularMedia (notas){

    let soma = 0;

    for (let nota of notas) {

      soma += nota;
    }
    return soma / notas.length;
  }   

function SAIR (){

    alert("Obrigado por utilizar este programa!");
    window.location.href = "https://youtu.be/Ct6BUPvE2sM?si=9dU1bkaf4pDnefIW";

}

MENU();
