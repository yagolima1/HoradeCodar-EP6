// Este array armazenará os registros da agenda, que conterão nome, endereço e telefone.
var agenda = [];

// Função principal que exibe o menu de opções para o usuário.
function MENU(){
    var HOME = parseInt(prompt("Selecione uma opção: \n1) Cadastro dos Registro \n2) Pesquisa dos Registro \n3) Classificar registro em ordem alfabética \n4) Mostrar Registros \n5) Sair"));

    // Switch para determinar qual função será executada com base na escolha do usuário.
    switch(HOME){
        case 1:
            cadastro(); // Chama a função de cadastro.
            break;

        case 2:
            pesquisa(); // Chama a função de pesquisa.
            break;

        case 3:
            classificar(); // Chama a função para classificar os registros por nome.
            break;

        case 4:
            mostrarRegistros(); // Chama a função que exibe todos os registros.
            break;

        case 5:
            SAIR(); // Chama a função que encerra o programa.
            break;

        default:
            // Caso o usuário escolha uma opção inválida, exibe uma mensagem e retorna ao menu.
            alert("Opção Inválida. Tente Novamente!");
            MENU();
    }
}

// Função para cadastrar até 10 registros na agenda.
function cadastro(){
    // Loop que executa 10 vezes, uma para cada cadastro.
    for (var i = 0; i < 10; i++){
        let  nome; // Variável para armazenar o nome.
        let endereco; // Variável para armazenar o endereço.
        let telefone; // Variável para armazenar o telefone.

        // Loop para garantir que o telefone é válido.
        while (true) {
            // Solicita os dados do usuário.
            nome = prompt("Digite o nome da " + (i + 1) + "ª pessoa:");
            endereco = prompt("Digite o endereço da " + (i + 1) + "ª pessoa:");
            telefone = parseInt(prompt("Insira o número de telefone da "  + (i + 1) + "ª pessoa:"));

            // Verifica se o telefone é válido (número positivo).
            if (isNaN(telefone) || telefone <= 0) {
                alert("Número inválido. Tente novamente.");
                MENU(); // Volta ao menu caso o telefone seja inválido.
            } else {
                break; // Sai do loop se o telefone for válido.
            }
        }
      
        // Cria um objeto com as informações da pessoa e o adiciona à agenda.
        let pessoa = { "nome": nome, "endereço": endereco,  "telefone": telefone };
        agenda.push(pessoa); // Adiciona o registro à agenda.
    }
    
    // Alerta o usuário de que a capacidade máxima de registros foi atingida.
    alert("Capacidade máxima de cadastro atingida!");
    MENU(); // Retorna ao menu.
}

// Função para pesquisar um registro pelo nome.
function pesquisa(){
    let pesquisarNome = prompt("Digite o nome que deseja pesquisar:"); // Solicita o nome a ser pesquisado.
    let busca = false; // Variável de controle para verificar se o registro foi encontrado.

    // Percorre a agenda procurando o nome informado.
    for (let pessoa of agenda){
        // Compara o nome da pessoa na agenda com o nome pesquisado (sem diferenciação de maiúsculas/minúsculas).
        if (pessoa.nome.toLowerCase() === pesquisarNome.toLowerCase()){
            // Exibe as informações da pessoa encontrada.
            alert("Esse registro foi encontrado! \n\nNome: " + pessoa.nome + "\nEndereço:  " + pessoa.endereco + "\nTelefone: " + pessoa.telefone);
            busca = true; // Define como true se o registro for encontrado.
            break; // Sai do loop após encontrar o registro.
        }
    }

    // Caso nenhum registro seja encontrado, exibe uma mensagem de erro.
    if (!busca){
        alert("Registro não encontrado!");
    }

    MENU(); // Retorna ao menu.
}

// Função para classificar os registros da agenda por nome (ordem alfabética).
function classificar(){
    // Verifica se há registros na agenda.
    if (agenda.length === 0) {
        alert("Nenhum registro para ordenar.");
        MENU(); // Retorna ao menu se não houver registros.
    } else {
        // Usa o método sort para ordenar a agenda por nome.
        agenda.sort((a, b) => a.nome.localeCompare(b.nome));
        alert("Registros ordenados por nome.");
    }
    MENU(); // Retorna ao menu.
}

// Função para mostrar todos os registros da agenda.
function mostrarRegistros(){
    // Verifica se há registros na agenda.
    if (agenda.length === 0) {
        alert("Nenhum registro cadastrado.");
    } else {
        let lista = "Registros da Agenda:\n\n"; // String que armazenará todos os registros.

        // Percorre a agenda e adiciona cada registro à string 'lista'.
        for (let pessoa of agenda) {
            lista += "Nome: " + pessoa.nome + "\nEndereço: " + pessoa.endereco + "\nTelefone: " + pessoa.telefone + "\n\n";
        }
        alert(lista); // Exibe a lista completa dos registros.
    }

    MENU(); // Retorna ao menu.
}

// Função para encerrar o programa.
function SAIR(){
    // Exibe uma mensagem de despedida.
    alert("Obrigado por utilizar este programa!");
    // Redireciona para um link (no caso, um vídeo no YouTube).
    window.location.href = "https://youtu.be/izGwDsrQ1eQ?si=SgF7f0ImfSdNdqZW";
}

// Chama a função MENU ao iniciar o programa.
MENU();
