// Este array armazenará os registros da matícula, que conterão nome e o salário dos funcionários.
var funcionarios = [];

// Função principal para exibir o menu e capturar a escolha do usuário
function MENU (){

    // Exibe o menu de opções e converte a entrada para inteiro
    var opcoes = parseInt(prompt("Escolha uma função: \n \n1) Cadastrar Funcionários \n2) Pesquisar Funcionários \n3) Apresentar Funcionários com salário acima de R$1.000 \n4) Apresentar Funcionários com salário abaixo de R$1.000 \n5) Apresentar Funcionários com salário iguais a R$1.000 \n6) Sair"));

    // Seleção das opções com base na escolha do usuário
    switch(opcoes){

        case 1:
            cadastroFuncionarios(); // Chama função para cadastrar os funcionários
            break;

        case 2:
            pesquisarFuncionario(); // Chama função para pesquisar um funcionário por matrícula
            break;

        case 3:
            apresentarSalarioAc1000(); // Chama função para exibir funcionários com salário acima de R$1.000
            break;

        case 4:
            apresentarSalarioAb1000(); // Chama função para exibir funcionários com salário abaixo de R$1.000
            break;

        case 5:
            apresentarSalarioIg1000(); // Chama função para exibir funcionários com salário igual a R$1.000
            break;

        case 6:
            SAIR(); // Encerra o programa
            break;

        default:
            alert("Opção Inválida! Tente Novamente."); // Exibe mensagem de erro para entradas inválidas
            MENU(); // Retorna ao menu
    }
}

// Função para cadastrar os 20 funcionários
function cadastroFuncionarios(){

    for (var i = 0; i < 20; i++){

        // Solicita a matrícula, nome e salário do funcionário
        let matricula = parseInt(prompt("Digite a matrícula do " +  (i + 1) + "º funcionário: "));
        let nome = prompt("Digite o nome do " +  (i + 1) +  "º funcionário: ");
        let salario = parseFloat(prompt("Digite o salário do " +  (i + 1) + "º funcionário: "));

        // Valida se a matrícula ou salário são inválidos
        if (isNaN(matricula) ||  isNaN(salario) ||  salario < 0) {
            alert("Você inseriu dados inválidos, tente novamente!");
            i--; // Decrementa o contador para refazer o cadastro
        } else {
            // Cria objeto do funcionário e o adiciona na lista de funcionários
            let funcionario = { matricula: matricula, nome: nome, salario: salario };
            funcionarios.push(funcionario);
        }
    }

    // Ordena os funcionários pela matrícula
    funcionarios.sort(function(a,b) { return a.matricula - b.matricula});

    alert("Número de cadastros alcançado."); // Informa que todos os cadastros foram concluídos
    MENU(); // Retorna ao menu
}

// Função para pesquisar um funcionário pela matrícula
function pesquisarFuncionario(){
    let matriculaPesquisa = parseInt(prompt("Insira a matrícula de quem deseja encontrar: "));
    let busca = false;

    // Itera pela lista de funcionários procurando a matrícula
    for (let funcionario of funcionarios){
        if (funcionario.matricula ===  matriculaPesquisa) {
            // Exibe os dados do funcionário encontrado
            alert("Matrícula: " + funcionario.matricula + "\nNome: " + funcionario.nome + "\nSalário: R$" + funcionario.salario.toFixed(2));
            busca = true;
            break; // Encerra a busca após encontrar o funcionário
        }
    }

    if (!busca){
        alert("Essa matrícula não foi encontrada!"); // Caso a matrícula não seja encontrada
    }

    MENU(); // Retorna ao menu
}

// Função para exibir funcionários com salário acima de R$1.000
function apresentarSalarioAc1000(){
    let busca = "";

    // Itera pela lista de funcionários verificando o salário
    for (let funcionario of funcionarios){
        if  (funcionario.salario > 1000) {
            // Adiciona as informações dos funcionários com salário acima de R$1.000 na variável busca
            busca +=  "Matrícula: " + funcionario.matricula + "\nNome: " + funcionario.nome  + "\nSalário: R$" + funcionario.salario.toFixed(2) + "\n";
        }
    }

    // Verifica se não foram encontrados funcionários com salário acima de R$1.000
    if (busca  === ""){
        alert("Não há funcionários com salário acima de R$1.000");
    } else {
        alert(busca); // Exibe a lista de funcionários encontrados
    }

    MENU(); // Retorna ao menu
}

// Função para exibir funcionários com salário abaixo de R$1.000
function apresentarSalarioAb1000(){
    let busca = "";

    // Itera pela lista de funcionários verificando o salário
    for (let funcionario of funcionarios){
        if  (funcionario.salario < 1000) {
            // Adiciona as informações dos funcionários com salário abaixo de R$1.000 na variável busca
            busca +=  "Matrícula: " + funcionario.matricula + "\nNome: " + funcionario.nome  + "\nSalário: R$" + funcionario.salario.toFixed(2) + "\n";
        }
    }

    // Verifica se não foram encontrados funcionários com salário abaixo de R$1.000
    if (busca  === ""){
        alert("Não há funcionários com salário abaixo de R$1.000");
    } else {
        alert(busca); // Exibe a lista de funcionários encontrados
    }

    MENU(); // Retorna ao menu
}

// Função para exibir funcionários com salário igual a R$1.000
function apresentarSalarioIg1000(){
    let busca = "";

    // Itera pela lista de funcionários verificando o salário
    for (let funcionario of funcionarios){
        if  (funcionario.salario === 1000) {
            // Adiciona as informações dos funcionários com salário igual a R$1.000 na variável busca
            busca +=  "Matrícula: " + funcionario.matricula + "\nNome: " + funcionario.nome  + "\nSalário: R$" + funcionario.salario.toFixed(2) + "\n";
        }
    }

    // Verifica se não foram encontrados funcionários com salário igual a R$1.000
    if (busca  === ""){
        alert("Não há funcionários com salário igual a R$1.000");
    } else {
        alert(busca); // Exibe a lista de funcionários encontrados
    }

    MENU(); // Retorna ao menu
}

// Função para sair do programa
function SAIR(){
    alert("Obrigado por utilizar este programa!"); // Exibe mensagem de encerramento
    window.location.href = "https://youtu.be/Eo-KmOd3i7s?si=Xyh7qy25cxE8fL3v"; // Redireciona para um link de encerramento
}


MENU(); // Inicia o programa exibindo o menu
