// Agenda. Considerando a necessidade de desenvolver uma agenda que contenha nomes, endereços e telefones de 10 pessoas, defina a estrutura de registro apropriada, o diagrama de blocos e a codificação de um programa que por meio do uso de um menu de opções, execute as seguintes etapas: a) Cadastrar os 10 registros.                            b) Pesquisar um dos 10 registros de cada vez pelo campo nome (usar o método seqüencial).                           c) Classificar por ordem de nome os registros cadastrados.                                                         d) Apresentar todos os registros.                                                                                  e) Sair do programa de cadastro.

var agenda = [];

function MENU(){
    var HOME = parseInt(prompt("1) Cadastro dos Registro \n2) Pesquisa dos Registro \n3) Classificar registro em ordem alfabética \n4) Mostrar Registros \n5) Sair"));

    switch(HOME){
        case 1:
            cadastro();
            break;

        case 2:
            pesquisa();
            break;

        case 3:
            classificar();
            break;

        case 4:
            mostrarRegistros();
            break;

        case 5:
            SAIR();
            break;

        default:
            alert("Opção Inválida. Tente Novamente!");
            MENU();
    }
}

function cadastro(){


    for (var i = 0; i < 10; i++){
    
        let  nome;
    
        let endereco;

        let telefone;
    
        while (true) {
    
            nome = prompt("Digite o nome da " + (i + 1) + "ª pessoa:");
    
            endereco = prompt("Digite o endereço da " + (i + 1) + "ª pessoa:");

            telefone = parseInt(prompt("Insira o número de telefone da "  + (i + 1) + "ª pessoa:"));

      
            if (isNaN(telefone) || telefone <= 0) {
    
              alert("Número inválido. Tente novamente.");
              MENU();
    
            } 
            else {
    
              break; 
    
            }
          }
      
          let pessoa = { "nome": nome, "endereço": endereco,  "telefone": telefone };
          agenda.push(pessoa);

        }
      
        alert("Capacidade máxima de cadastro atingida!");
    
        MENU();
      }

function pesquisa(){

    let pesquisarNome = prompt("Digite o nome que deseja pesquisar:");
    let busca = false;

    for (let pessoa of agenda){

        if (pessoa.nome.toLowerCase() === pesquisarNome.toLowerCase()){
            alert("Esse registro foi encontrado! \n\nNome: " + pessoa.nome + "\nEndereço:  " + pessoa.endereco + "\nTelefone: " + pessoa.telefone);

            busca = true;
            break;

        }
    }

    if (!busca){

        alert("Registro não encontrado!");
    }

    MENU();

}

function  classificar(){

    if (agenda.length === 0) {

        alert("Nenhum registro para ordenar.");
        MENU();

    } 
    
    else {

        agenda.sort((a, b) => a.nome.localeCompare(b.nome));

        alert("Registros ordenados por nome.");
    }
    MENU();
}    

function  mostrarRegistros(){

    if (agenda.length === 0) {

        alert("Nenhum registro cadastrado.");

    } 
    
    else {
        let lista = "Registros da Agenda:\n\n";

        for (let pessoa of agenda) {
            lista += "Nome: " + pessoa.nome + "\nEndereço: " + pessoa.endereco + "\nTelefone: " + pessoa.telefone + "\n\n";
        }
        alert(lista);
    }

    MENU();
}

function  SAIR(){

    alert("Obrigado por utilizar este programa!");
    window.location.href = "https://youtu.be/izGwDsrQ1eQ?si=SgF7f0ImfSdNdqZW";
}




MENU();
