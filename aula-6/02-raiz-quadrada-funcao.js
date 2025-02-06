window.onload = function (e) {

    let btn = document.getElementById("btn");

    btn.onclick = function () {
        let numeroDigitado = document.getElementById("txtNumero");
        let numero = parseFloat(numeroDigitado.value);
        numeroDigitado.focus();

        let calculo = raizQuadrada(numero);
        alert(calculo);  
    };

    function raizQuadrada(numero) {
        let raiz = numero * numero;

        return raiz;
    }

}