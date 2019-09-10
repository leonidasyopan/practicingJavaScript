function verificar() {
    var data = new Date();
    var ano = data.getFullYear();

    var anoFormulario = document.getElementById('txtano');

    var resultado = document.getElementById('resultado');

    if(anoFormulario.value.length == 0 || anoFormulario.value > ano) {
        window.alert('Verifique os dados informados!')
    }
}