//função para totalizar valor de assinatura mensal
function totaliza() {
    total = 0.00;
    //plano mensal
    if(document.form.planos[0].checked)
        total = total + 85.00;
    //plano quadrimestral
    if(document.form.planos[1].checked)
        total = total + 300.00 / 4;
    //plano anual
    if(document.form.planos[2].checked)
        total = total + 600.00 / 12;
    //Premiere econômico
    if(document.form.premiere[0].checked)
        total = total + 60.00;
    //Premiere controle
    if(document.form.premiere[1].checked)
        total = total + 80.00;
    document.form.total.value = total.toFixed(2);
}

// Validação com REGEX - Nome
function validarNome() {
    let value = document.getElementById("nome").value;
    let re = /^[a-zA-ZéúíóáÉÚÍÓÁèùìòàçÇÈÙÌÒÀõãñÕÃÑêûîôâÊÛÎÔÂëÿüïöäËYÜÏÖÄ\-\ \s]+$/;
    if (!re.test(value)) {
      // campo inválido, retorna false para o formulário não ser submetido
      alert('Somente caracteres alfabéticos Inválido');
      document.form.nome.focus(); // Seta o foco no input com id "nome"
      return false;
    } else {
        return true;
    }
}

// Validação com REGEX - CPF
function validarCPF() {
    let value = document.getElementById("cpf").value;
    let re = /^(([0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2})|([0-9]{11}))$/;
    if (!re.test(value)) {
      // campo inválido, retorna false para o formulário não ser submetido
      alert('Conteúdo de CPF Inválido');
      document.form.cpf.focus();
      return false;
    } else {
        return true;
    }
}

// Validação com REGEX - E-mail
function validarEmail() {
    let emailValue = document.getElementById("email").value;
    let emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
    if (!emailRegex.test(emailValue)) {
        alert('Email Inválido!');
        document.form.email.focus();
        return false;
    } else {
        return true;
    }
}

// Validação com REGEX - Celular
function validarCelular() {
    let celularValue = document.getElementById("cel").value;
    // Formato válido: (XX) XXXXX-XXXX | (ou) XXXXXXXXXXX
    let celularRegex = /^((\([0-9]{2}\) [0-9]{5}\-[0-9]{4}) | ([0-9{11}]))$/;
    if (!celularRegex.test(celularValue)) {
        alert("Celular inválido!");
        document.form.cel.focus();
        return false;
    } else {
        return true;
    }
}

// Validação com REGEX - Planos
function validaPlanos() {
    let planoValue = document.getElementsByName("planos");
    let planoCkecked = false;
    for (i = 0; i < planoValue.length; i++) {
        if (planoValue[i].checked) {
            planoCkecked = true;
        }
    }
    if (!planoCkecked) {
        alert("Selecione o Plano");
        return false;
    } else {
        return true;
    }
}