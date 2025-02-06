window.onload = function (e) {

    let btn = document.getElementById("btn");

    btn.onclick = function(e) {
        let mensagem = "Olá Mundo";

        exibirMensagem(mensagem);
    };

    function exibirMensagem(mensagem) {
        alert(mensagem);
    }
}