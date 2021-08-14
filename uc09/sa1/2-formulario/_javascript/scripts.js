// Cria a função teste()
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

// Cria a função verifica_cadastro()
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
    var mes = parseInt(document.getElementById("month").value) // função parseInt converte o texto digitado pelo usuario no tipo inteiro
    if ((mes < 1) || (mes > 12) || (isNaN(mes))) {
        resultado = false;
    }

    // Verifica ano
    var ano_atual = new Date().getFullYear(); // armazena a data atual na variavel "ano_atual"
    var ano = parseInt(document.getElementById("year").value);
    if ((ano < 1900) || (ano > ano_atual) || (isNaN(ano))) {
        resultado = false;
    }

    // Verifica CPF
    var expressao = /[0-9][0-9][0-9]\.[0-9][0-9][0-9]\.[0-9][0-9][0-9]\-[0-9][0-9]/; // Regex - formatação do campo CPF
    var cpf = document.getElementById("cpf").value;
    if (!(expressao.test(cpf))) { // (!) se nao for - expressao
        resultado = false;
    }
    
    // Verifica times
    // var times = document.getElementsByTagName("option");

    // Verifica esportes
    var esportes = document.getElementsByTagName("sport");
    var cont_esporte = 0;
    for (var i = 0; i < esportes.length; ++i) {
        if (esportes[i].checked) {
            cont_esporte = cont_esporte + 1;
        }
    }
    if ((cont_esporte == 0)) {
        resultado = false;
    }
    return resultado; // retorno da função: verifica_cadastro()
}

// Cria a função dados()
function dados() {
    var cadastro = new Object();

    cadastro.name = document.getElementById("name").value;

    cadastro.nickname = document.getElementById("nickname").value;

    cadastro.birth_date = document.getElementById("year").value;
        document.getElementById("month").value + "-" +
        document.getElementById("day").value;

    cadastro.cpf = document.getElementById("cpf").value;

    var times = document.getElementsByTagName("option");
    for (var i = 0; i < times.length; ++i) {
        if (times[i].selected) {
            cadastro.team_id = times[i].id;
        }
    }

    var esportes = document.getElementsByName("sport");
    cadastro.sport = [];
    for (var i = 0; i < esportes.length; ++i) {
        if (esportes[i].checked) {
            cadastro.sport.push(esportes[i].id);
        }
    }

    return cadastro;
}