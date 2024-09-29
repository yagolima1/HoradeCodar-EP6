// Elaborar um programa que armazene o nome e a altura de 15 pessoas, por meio do uso de registros. O programa deverá ser manipulado por um menu que execute as seguintes etapas:                                                 a) Cadastrar os 15 registros.                                                                                      b) Apresentar os registros (nome e altura) das pessoas menores ou iguais a 1.5m.                                                                                                                 c) Apresentar os registros (nome e altura) das pessoas que sejam maiores que 1.5m.                                                                                                                d) Apresentar os registros (nome e altura) das pessoas que sejam maiores que 1.5m e menores que 2.0m.                                                                                                                e) Apresentar a média extraída de todas as alturas armazenadas.                                                                                                       f) Sair do programa.

var  pessoasP = [];
var pessoasN = [];
var  pessoasG = [];


function MENU() {

  var HOME = parseInt(prompt( "Escolha uma opção: \n \n1) Cadastrar \n2) Registro <= 1.5m \n3) Registro > 1.5m \n4) Registro > 1.5m < 2.0m \n5) Média das Alturas \n6) Sair"));

  switch (HOME) {

    case 1:
      cadastro();
      break;

    case 2:
      registroMenorIgual();
      break;

    case 3:
      registroMaior();
      break;

    case 4:
      registroMaiorMenor();
      break;

    case 5:
      mediaAltura();
      break;

    case 6:
      SAIR();
      break;

      default:
        alert("Opção inválida. Tente Novamente!");
        MENU();
  }
}

function cadastro (){

    for (var i = 0; i < 15; i++){
    
    let  nome;

    let altura;

    while (true) {

        nome = prompt("Digite o nome da " + (i + 1) + "ª pessoa:");

        altura = parseFloat(prompt("Digite a altura da " + (i + 1) + "ª pessoa (em metros):"));
  
        if (isNaN(altura) || altura <= 0) {

          alert("Altura inválida. Tente novamente.");

        } 
        else {

          break; 

        }
      }
  
      let pessoa = { "nome": nome, "altura": altura };

      if (altura <= 1.5) {

        pessoasP.push(pessoa);
      } 
      
      else if (altura > 1.5 && altura < 2.0) {

        pessoasN.push(pessoa);
      }
      
      else {

        pessoasG.push(pessoa);

      }
    }
  
    alert("Capacidade máxima de cadastro atingida!");

    MENU();
  }

function registroMenorIgual(){

    if (pessoasP.length === 0){

        alert("Nenhum registro encontrado!");
        MENU();
    }

    else {

    alert(pessoasP)
    MENU();

    }
}

function registroMaior(){

    if (pessoasN.length === 0){

        alert("Nenhum registro encontrado!");
        MENU();
    }

    else {

    alert(pessoasN)
    MENU();

    }
}

function registroMaiorMenor(){

    if (pessoasG.length === 0){

        alert("Nenhum registro encontrado!");
        MENU();
    }

    else {

    alert(pessoasG)
    MENU();

    }
}

function mediaAltura(){

    if  (pessoasP.length === 0 && pessoasN.length === 0 && pessoasG.length === 0){
        alert("Nenhum registro foi encontrado!");
        MENU();
    }

    let totalPessoas = pessoasP.length +  pessoasN.length + pessoasG.length;
    let soma = 0;
    
    for (let pessoa of  pessoasP) {
        soma += pessoa.altura;
    }

    for (let pessoa of pessoasN) {
        soma += pessoa.altura;
    }

    for  (let pessoa of pessoasG) {
        soma += pessoa.altura;
    }

    let media = soma / totalPessoas;

    alert("A  média das altura é de: " + media.toFixed(2) + "m.");

    MENU();
}


function SAIR(){
    alert("Obrigado por utilizar este programa!");
    window.location.href = "https://youtu.be/dQw4w9WgXcQ?si=we96pFWli5dFU1ms";
}




MENU();
