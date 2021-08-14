// Cria a função Teste
function teste() {
    console.log(dados()); // Chama a função dados() e apresenta no console.log - debug do navegador

    //se
    if (verifica_cadastro()) {
        alert("Formulário correto!")
    //senao
    } else {
        alert("Formulário com erro!")
    }
}

function verifica_cadastro() {

    // Cria a variavel resultado e retorna ela sempre como verdadeiro
    var resultado = true;

    // Cria uma variável chamada "nome" para validar o que o usuario digitou no nome
    var nome = document.getElementById("name").value; // pega o valor do elemento HTML com o ID "name"
    if ((nome.length < 10) || (nome.length > 80)) { // se o nome for menor que 10 ou maior que 80 retorna falso
        resultado = false;
    }

    // Cria uma variável chamada "apelido" para validar o que o usuario digitou no apelido
    var apelido = document.getElementById("nickname").value; 
    if ((apelido.length < 2) || (apelido.length > 20)) { 
        resultado = false;
    }

    // Cria uma variável chamada "dia" para 
    var dia = parseInt(document.getElementById("day").value); // função parseInt converte texto em inteiro
    if ((dia < 1) || (dia > 31) || (isNaN(dia))) { //isNaN - função que retorna que isso não é um número
        resultado = false;
    }

    // Verifica mes
    var mes = parseInt(document.getElementById("month").value)
    if ((mes < 1) || (mes > 12) || (isNaN(mes))) {
        resultado = false;
    }

    // Verifica ano
    var ano_atual = new Date().getFullYear();
    var ano = parseInt(document.getElementById("year").value);
    if ((ano < 1900) || (ano > ano_atual) || (isNaN(ano))) {
        resultado = false;
    }
}