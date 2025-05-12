// 1- Solicitando informações pelo prompt
let nomeVinho = prompt("Digite o nome do vinho a ser cadastrado:")
let tipoVinho = prompt("Qual o tipo do vinho?")
let safraVinho = prompt("De que ano ele é?")
let quantEstoque = prompt("Quantos vinhos há em estoque?")

// 2- Validando se o usuário digitou algum valor
if ((nomeVinho == "") || (nomeVinho == " ")) {
    nomeVinho = prompt('Nome do vinho não inserido. Digite o nome do vinho a ser cadastrado: ');
}
if ((tipoVinho == "") || (tipoVinho == " ")) {
    tipoVinho = prompt('Tipo do vinho não inserido. Qual o tipo do vinho?');
}
if ((safraVinho == "") || (safraVinho == " ")) {
    safraVinho = prompt("Ano do vinho não inserido. De que ano ele é?");
}
if ((quantEstoque == "") || (quantEstoque == " ")) {
    quantEstoque = prompt("Quantidade em estoque não inserida. Quantos vinhos há em estoque?");
}

// 3- Exibindo alert de cadastro realizado
alert("Cadastro realizado! Veja os detalhes no console.")

console.log("===========================================")
console.log("============= Vinho Cadastrado ============")
console.log(`Nome do vinho: ${nomeVinho}`)
console.log(`Tipo do vinho: ${tipoVinho}`)
console.log(`Ano da safra: ${safraVinho}`)
console.log(`Quantidade em estoque: ${quantEstoque}`)

// 6- Verificação de estoque
alert('Visualize o console para verificar nível do estoque!');
if (quantEstoque < 5) {
    statusEstoque = "baixo"
} else {
    statusEstoque = "normal"
}
console.log(`Estoque ${statusEstoque}`);

// 7- Classificação da safra
alert("Visualize o console para verificar a maturação!");
if (safraVinho < 2015) {
    maturacao = "Vinho antigo";
} else if (safraVinho <= 2019) {
    maturacao = "Vinho amadurecido";
} else {
    maturacao = "Vinho jovem";
}
console.log(maturacao)

// 8- Ficha técnica do vinho cadastrado
alert("A seguir, veja a ficha técnica do vinho no console.")
console.log("===========================================")
console.log("==== Ficha Técnica do Vinho Cadastrado ====")
console.log(`Nome do vinho: ${nomeVinho}`)
console.log(`Tipo do vinho: ${tipoVinho}`)
console.log(`Ano da safra: ${safraVinho}`)
console.log(`Quantidade em estoque: ${quantEstoque}`)
console.log(`Status do estoque: ${statusEstoque}`)
console.log(`Estágio de maturação: ${maturacao}`)