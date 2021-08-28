function ClassificacaoIndicativa() {
    var valida = {

        valida_classificacao_indicativa: function(livre, data_nascimento, idade) {
            if (livre) {
                return true;
            } else {
                let birthday = data_nascimento.split("/");
                let day = Number(birthday[1]);
                let month = Number(birthday[0]);
                let year = Number(birthday[2]);
                return new Date(year + idade, month - 1, day) <= new Date();
            }
        }
    }
    return valida;
}