function checkVisto() {
    var txtname = window.document.getElementById('txtname').value;
    var txtpais = document.getElementById('txtpais').value;
    var resultado = document.querySelector('div#resultado');
    var name = txtname.toUpperCase();
    var pais = txtpais.toUpperCase();

    resultado.innerHTML = `Olá, ${name}! Bem-vindo(a) ao Brasil.`;
    if(pais == 'BRASIL' || pais == 'BRAZIL'){
        resultado.innerHTML += `<p>Sendo natural do Brasil, você pode seguir para o desembarque.</p>`
    } else {
        resultado.innerHTML += `<p>Cidadões naturais do(a) ${pais} precisam primeiramente passar pela alfândega.</p>`;
    }

    resultado.innerHTML += `<p>Tenha uma excelente estadia!</p>`;
}