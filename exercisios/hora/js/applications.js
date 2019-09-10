function carregar() {
    var mensagem = window.document.getElementById('mensagem');
    var imagem = window.document.getElementById('imagem');

    var data = new Date();
    var hora = data.getHours();

    mensagem.innerHTML = `Agora são ${hora} horas.`;

    if (hora >= 0 && hora < 12 ) {
        // BOM DIA 
        imagem.src = 'img/morning.png';
        document.body.style.background = '#FF9901';
    }   else if (hora >= 12 && hora < 18) {
        // BOA TARDE
        imagem.src = 'img/afternoon.png';
        document.body.style.background = '#8EA6BD';
    }   else if (hora >= 18 && hora < 20) {
        // GOOD EVENING
        imagem.src = 'img/evening.png';
        document.body.style.background = '#B4B6BD';
    } else {
        // GOOD NIGHT
        imagem.src = 'img/night.png';
        document.body.style.background = '#19374F';
    }
}


