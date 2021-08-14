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