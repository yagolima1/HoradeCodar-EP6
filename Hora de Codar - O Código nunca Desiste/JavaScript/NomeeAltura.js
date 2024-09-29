// Declaração de arrays para armazenar as pessoas em três categorias:
// 'pessoasP' para quem tem altura <= 1.5m, 
// 'pessoasN' para quem tem altura > 1.5m e < 2.0m, 
// 'pessoasG' para quem tem altura >= 2.0m.
var pessoasP = [];
var pessoasN = [];
var pessoasG = [];

function MENU() {
  // Exibe o menu e solicita ao usuário uma escolha
  var HOME = parseInt(prompt("Escolha uma opção: \n \n1) Cadastrar \n2) Registro <= 1.5m \n3) Registro > 1.5m \n4) Registro > 1.5m < 2.0m \n5) Média das Alturas \n6) Sair"));

  // Usa um switch para escolher a função correspondente com base na escolha do usuário
  switch (HOME) {
    case 1:
      cadastro();  // Cadastro de pessoas
      break;
    case 2:
      registroMenorIgual();  // Exibe registros com altura <= 1.5m
      break;
    case 3:
      registroMaior();  // Exibe registros com altura > 1.5m
      break;
    case 4:
      registroMaiorMenor();  // Exibe registros com altura > 1.5m e < 2.0m
      break;
    case 5:
      mediaAltura();  // Calcula e exibe a média de todas as alturas
      break;
    case 6:
      SAIR();  // Sai do programa
      break;
    default:
      // Caso o usuário insira uma opção inválida
      alert("Opção inválida. Tente Novamente!");
      MENU();
  }
}

function cadastro (){
  // Laço para cadastrar 15 pessoas
  for (var i = 0; i < 15; i++){
    let nome;
    let altura;

    // Laço para garantir que a altura seja um valor válido
    while (true) {
      nome = prompt("Digite o nome da " + (i + 1) + "ª pessoa:");
      altura = parseFloat(prompt("Digite a altura da " + (i + 1) + "ª pessoa (em metros):"));
      
      if (isNaN(altura) || altura <= 0) {
        alert("Altura inválida. Tente novamente.");
      } else {
        break; // Sai do laço quando a altura for válida
      }
    }

    // Armazena os dados da pessoa em um objeto
    let pessoa = { "nome": nome, "altura": altura };

    // Categoriza as pessoas com base na altura
    if (altura <= 1.5) {
      pessoasP.push(pessoa);
    } else if (altura > 1.5 && altura < 2.0) {
      pessoasN.push(pessoa);
    } else {
      pessoasG.push(pessoa);
    }
  }
  
  alert("Capacidade máxima de cadastro atingida!");
  MENU(); // Retorna ao menu
}

function registroMenorIgual(){
  // Verifica se existem registros de pessoas com altura <= 1.5m
  if (pessoasP.length === 0){
    alert("Nenhum registro encontrado!");
  } else {
    alert(pessoasP); // Exibe os registros
  }
  MENU(); // Retorna ao menu
}

function registroMaior(){
  // Verifica se existem registros de pessoas com altura > 1.5m
  if (pessoasN.length === 0){
    alert("Nenhum registro encontrado!");
  } else {
    alert(pessoasN); // Exibe os registros
  }
  MENU();
}

function registroMaiorMenor(){
  // Verifica se existem registros de pessoas com altura >= 2.0m
  if (pessoasG.length === 0){
    alert("Nenhum registro encontrado!");
  } else {
    alert(pessoasG); // Exibe os registros
  }
  MENU();
}

function mediaAltura(){
  // Verifica se há registros para calcular a média
  if (pessoasP.length === 0 && pessoasN.length === 0 && pessoasG.length === 0){
    alert("Nenhum registro foi encontrado!");
    MENU();
  }

  // Calcula a média das alturas
  let totalPessoas = pessoasP.length + pessoasN.length + pessoasG.length;
  let soma = 0;
  
  for (let pessoa of pessoasP) {
    soma += pessoa.altura;
  }

  for (let pessoa of pessoasN) {
    soma += pessoa.altura;
  }

  for (let pessoa of pessoasG) {
    soma += pessoa.altura;
  }

  let media = soma / totalPessoas;
  alert("A média das alturas é de: " + media.toFixed(2) + "m.");

  MENU();
}

function SAIR(){
  // Exibe mensagem de saída e redireciona para um link
  alert("Obrigado por utilizar este programa!");
  window.location.href = "https://youtu.be/dQw4w9WgXcQ?si=we96pFWli5dFU1ms";
}

MENU(); // Chama o menu ao iniciar o programa
