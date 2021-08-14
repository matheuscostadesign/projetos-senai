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
    var resultado = true;

    // Verifica o nome
    var nome = document.getElementById("name").value; // pega o valor do elemento HTML com o ID "name"
    if ((nome.length < 10) || (nome.length > 80)) { // se o nome for menor que 10 ou maior que 80 retorna falso
        resultado = false;
    }

    // Verifica o apelido
    
    
}