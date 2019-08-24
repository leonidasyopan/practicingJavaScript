function calcular() {
    var txtvel = document.getElementById('txtvel');
    var res = document.querySelector('div#res');
    var vel = Number(txtvel.value);

    res.innerHTML = `<p>Sua velocidade atual é de <strong>${vel}km/h</strong>.</p>`;
    if(vel > 60) {
        res.innerHTML += `<p>Você foi MULTADO por excesso de velocidade!</p>`
    }
    res.innerHTML += `<p>Dirija sempre com sinto de segurança!</p>`;
}