function validarEntrada() {
    let entrada = prompt("Diga um vinho: ");
    
}

function vinho(nome, tipo, safra, quantidade) {
    this.nome = nome;
    this.tipo = tipo;
    this.safra = safra;
    this.quantidade = quantidade;
}

function estoqueBaixo(quantidade) {
    return quantidade < 5;
}

function classificarVinho(ano) {
    const anoAtual = 2025 
    const idade = anoAtual - ano;

    if (idade < 5) return "jovem";
    if (idade < 10) return "amadurecido";
    if (idade < 15) return "antigo";
}

function mostrarDados(vinho) {
    console.log("Dados do Vinho: ");
    
}

    console.log("Dados do Vinho:");
    console.log("Nome: " + vinho.nome);
    console.log("Tipo: " + vinho.tipo);
    console.log("Quantidade: " + vinho.quantidade);
    console.log("Classificação: " + classificarVinho(vinho.safra));
    
    if (estoqueBaixo(vinho.quantidade)) {
        console.log("Estoque baixo! Reabastecer.");
    } else {
        console.log("Estoque suficiente.");
    }

// LOOP DO CADASTRO
let continuar = "s";
let totalCadastros = 0;

while (continuar === "s") {
    
    const nome = prompt("Digite o nome do vinho:");
    const tipo = prompt("Digite o tipo do vinho:");
    const safra = parseInt(prompt("Digite o ano da safra:"));
    const quantidade = parseInt(prompt("Digite a quantidade em estoque:"));

    continuar = prompt("Deseja cadastrar outro vinho? (s/n)").toLowerCase();
}
console.log("Total de vinhos cadastrados: " + totalCadastros);
