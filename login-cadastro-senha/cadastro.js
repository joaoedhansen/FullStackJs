window.onload = function (e) {

    let txtNome = document.getElementById("txtNome");
    let txtSobrenome = document.getElementById("txtSobrenome");
    let txtCpf = document.getElementById("txtCpf");
    let txtTelefone = document.getElementById("txtTelefone");
    let slcGenero = document.getElementById("slcGenero");
    let txtEmail = document.getElementById("txtEmail");
    let txtSenha = document.getElementById("txtSenha");
    let txtConfirmaSenha = document.getElementById("txtConfirmaSenha");
    let btnCadastrar = document.getElementById("btnCadastrar");

    txtNome.focus();

    btnCadastrar.onclick = function (e) {

        e.preventDefault();

        let nome = txtNome.value;
        let sobrenome = txtSobrenome.value;
        let cpf = txtCpf.value;
        let telefone = txtTelefone.value;
        let genero = slcGenero.value;
        let email = txtEmail.value;
        let senha = txtSenha.value;
        let confirmaSenha = txtConfirmaSenha.value;

        if (nome == "" || sobrenome == "" || cpf == "" || telefone == "" ||
            genero == "" || email == "" || senha == "" ||  confirmaSenha == "") {
                
                exibirMensagemErro("Oops... Todos os campos devem ser preenchidos!");
        }
        else {
            realizarCadastro(nome, sobrenome, cpf, telefone, genero, email, senha, confirmaSenha);
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

    function realizarCadastro(nome, sobrenome, cpf, telefone, genero, email, senha, confirmaSenha) {
        alert("Cadastro realizado!");
    }
}