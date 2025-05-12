

// function vinho(nome, tipo, safra, quantidade) {
//     this.nome = nome;
//     this.tipo = tipo;
//     this.safra = safra;
//     this.quantidade = quantidade;
// }

// function estoqueBaixo(quantidade) {
//     // Para verificar se o estoque está baixo (menos de 5)
//     return quantidade < 5;
// }

// function classificarVinho(ano) {
//     // Para classificar o vinho (jovem, amadurecido, antigo)
//     const anoAtual = 2025 
//     const idade = anoAtual - ano;

//     if (idade < 5) return "jovem";
//     if (idade < 10) return "amadurecido";
//     if (idade < 15) return "antigo";
// }

// function mostrarDados(vinho) {
//     // Para mostrar os dados no console com aviso por `alert()`
//     console.log("Dados do Vinho: ");
    
// }

//     console.log("Dados do Vinho:");
//     console.log("Nome: " + vinho.nome);
//     console.log("Tipo: " + vinho.tipo);
//     console.log("Quantidade: " + vinho.quantidade);
//     console.log("Classificação: " + classificarVinho(vinho.safra));
    
//     if (estoqueBaixo(vinho.quantidade)) {
//         console.log("Estoque baixo! Reabastecer.");
//     } else {
//         console.log("Estoque suficiente.");
//     }




// console.log("Total de vinhos cadastrados: " + totalCadastros);


// // 3. Crie **funções reutilizáveis**:
// // 
// //    - Para verificar se o estoque está baixo (menos de 5)
// //    - Para classificar o vinho (jovem, amadurecido, antigo)
// //    - Para mostrar os dados no console com aviso por `alert()`

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

// function estoqueBaixo{

// }

let nomeVinho;
let tipoVinho;
let safraVinho;
let quantEstoque;

let totalCadastros = 0;

do {
    // Cadastro do vinho usando a função de validação
    nomeVinho = validarEntrada("Digite o nome do vinho a ser cadastrado:");
    tipoVinho = validarEntrada("Qual o tipo do vinho?");
    safraVinho = validarEntrada("Digite a safra do vinho:");
    quantEstoque = validarEntrada("Quantos vinhos há em estoque?");

    console.log(nomeVinho)
    console.log(tipoVinho)
    console.log(safraVinho)
    console.log(quantEstoque)
    
    // Pode converter a quantidade para número se necessário:
    // const quantidadeNumero = parseInt(quantidade);
    
    // Pergunta se deseja cadastrar outro vinho
    continuar = prompt("Deseja cadastrar outro vinho? (s/n)");
} while (continuar == "s");