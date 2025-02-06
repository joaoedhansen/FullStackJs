window.onload = function (e) {
    
    let txtEmail = document.getElementById("txtEmail");
    let btnEnviar = document.getElementById("btnEnviar");

    txtEmail.focus();

    btnEnviar.onclick = function (e) {

        e.preventDefault();

        let email = txtEmail.value;

        if (email == "") {
            exibirMensagemErro("Oops... Informe o e-mail cadastrado!")
        }
        else {
            enviarEmailSenha(email)
        }

        function exibirMensagemErro(mensagem) {
            let spnErro = document.getElementById("spnErro");
    
            spnErro.innerText = mensagem;
    
            spnErro.style.display = "block";
    
            setTimeout(function () {
                spnErro.style.display = "none";
            }, 5000);
        }

        function enviarEmailSenha(email) {
            alert("Encaminhado e-mail para: " + email)
        }

    }
}