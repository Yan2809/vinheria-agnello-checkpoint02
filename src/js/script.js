// Validar entrada de dados do vinho
function validarEntrada(mensagem) {
    let valor;
    do {
        valor = prompt(mensagem);
        if (valor == "" || valor == " ") {
            alert("Por favor, insira um valor válido!");
        }
    } while (valor == "" || valor == " ");
    
    return valor;
}

// Verificar situação do estoque
function estoqueBaixo(quantidade){
    let statusEstoque;
    if (quantidade < 5) {
        statusEstoque = "baixo";
    } else {
        statusEstoque = "normal";
    }

    return statusEstoque;
}

// Classificar o vinho (antigo, amadurecido, jovem)
function classificarVinho(safra){
    let maturacao;
    if (safra < 2015) {
        maturacao = "Vinho antigo";
    } else if (safra <= 2019) {
        maturacao = "Vinho amadurecido";
    } else {
        maturacao = "Vinho jovem";
    }

    return maturacao;
}

// Mostrar ficha técnica do vinho cadastrado
function mostrarDados(nome, tipo, safra, quantidade, estoque, sazonamento){
    alert("A seguir, veja a ficha técnica do vinho no console.");
    console.log("===========================================");
    console.log("==== Ficha Técnica do Vinho Cadastrado ====");
    console.log(`Nome do vinho: ${nome}`);
    console.log(`Tipo do vinho: ${tipo}`);
    console.log(`Ano da safra: ${safra}`);
    console.log(`Quantidade em estoque: ${quantidade}`);
    console.log(`Status do estoque: ${estoque}`);
    console.log(`Estágio de maturação: ${sazonamento}`);
}

let nomeVinho;
let tipoVinho;
let safraVinho;
let quantEstoque;

let statusEstoque;
let totalEstoqueBaixo = 0;

let vinhoMaisAntigo = "";
let safraMaisAntiga = Infinity;

let maturacao;

let totalCadastros = 0;

do {
    // Cadastro do vinho usando a função de validação
    nomeVinho = validarEntrada("Digite o nome do vinho a ser cadastrado:");
    tipoVinho = validarEntrada("Qual o tipo do vinho?");
    safraVinho = validarEntrada("Digite a safra do vinho:");
    quantEstoque = validarEntrada("Quantos vinhos há em estoque?");

    // Verificação do estoque usando a função de estoque baixo
    statusEstoque = estoqueBaixo(quantEstoque);

    // Contador do total de vinhos com estoque baixo
    if (statusEstoque == "baixo"){
        totalEstoqueBaixo += 1;
    }

    // Verificação de qual vinho é o mais antigo
    if (safraVinho < safraMaisAntiga){
        safraMaisAntiga = safraVinho
        vinhoMaisAntigo = nomeVinho
    }

    // Verificação da maturação do vinho usando a função de classificar vinho
    maturacao = classificarVinho(safraVinho);

    // Apresentação dos dados do vinho cadastrado através da função mostrar dados
    mostrarDados(nomeVinho, tipoVinho, safraVinho, quantEstoque, statusEstoque, maturacao);

    // Contador do total de vinhos cadastrados
    totalCadastros += 1;
    
    // Permitindo cadastro de vários vinhos
    continuar = prompt("Deseja cadastrar outro vinho? (s/n)");
} while (continuar == "s");

// Apresentação final, contendo quantidade de vinhos cadastrados, com estoque baixo e mais antigo
alert("Visualize o console para verificar os vinhos cadastrados, quantidade de vinhos, quantos estão em estoque baixo e qual rótulo é o mais antigo")
console.log(`Foram cadastrados ${totalCadastros} vinhos`)
console.log(`${totalEstoqueBaixo} vinhos tem estoque baixo`)
console.log(`O vinho com a safra mais antiga é ${vinhoMaisAntigo} de ${safraMaisAntiga}`)
