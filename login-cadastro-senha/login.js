window.onload = function (e) {

    let txtEmail = document.getElementById("txtEmail");

    let txtSenha = document.getElementById("txtSenha");

    let btnEntrar = document.getElementById("btnEntrar");

    txtEmail.focus();

    btnEntrar.onclick = function (e) {

    e.preventDefault();

        let email = txtEmail.value;
        let senha = txtSenha.value;

        if (email == "") {
            exibirMensagemErro("Oops! Informe seu e-mail.");
        }
        else if (senha == "") {
            exibirMensagemErro("Oops! Informe sua senha.");
        }
        else {
            realizarLogin(email,senha);
        }
    }

    function exibirMensagemErro(mensagem) {
        let spnErro = document.getElementById("spnErro");

        spnErro.innerText = mensagem;

        spnErro.style.display = "block";

        setTimeout(function () {
            spnErro.style.display = "none";
        }, 5000);
    }

    function realizarLogin(email, senha) {
        alert("Login realizado com sucesso!")
    }
}