function verificar() {
    /* Set the current year */
    var data = new Date();
    var ano = data.getFullYear();

    /* Grab the year of birth from form */ 
    var anoFormulario = document.getElementById('txtano');

    /* Set the result div to a variable called div */
    var resultado = document.getElementById('resultado');

    /* Check whether there is any information missing from the form */
    /* BEFORE trying to use the info */
    if(anoFormulario.value.length == 0 || Number(anoFormulario.value) > ano) {
        window.alert('Verifique os dados e tente novamente!')
    } else {
        var sexo = document.getElementsByName('radsex');
        var idade = ano - Number(anoFormulario.value);

        var genero = '';

        /* This part will create an image element and set it to id="foto" */
        var img = document.createElement('img');
        img.setAttribute('id', 'foto');

        /* Test whether it's a man or a woman */
        if(sexo[0].checked) {
            genero = 'um Homem';

            /* Decide image depending on age */
            if(idade > 0 && idade <= 3) {
                // baby boy
                img.setAttribute('src', 'img/baby-boy.png');
            } else if (idade < 12 ) {
                // boy
                img.setAttribute('src', 'img/boy.png');
            } else if(idade <= 18) {
                // young man
                img.setAttribute('src', 'img/young-man.png');
            } else if (idade <= 50) {
                // man
                img.setAttribute('src', 'img/man.png');
            } else {
                // old man
                img.setAttribute('src', 'img/old-man.png');
            }

        } else {
            genero = 'uma Mulher';

            /* Decide image depending on age */
            if(idade > 0 && idade <= 3) {
                // baby boy
                img.setAttribute('src', 'img/baby-girl.png');
            } else if (idade < 12 ) {
                // boy
                img.setAttribute('src', 'img/girl.png');
            } else if(idade <= 18) {
                // young man
                img.setAttribute('src', 'img/young-woman.png');
            } else if (idade <= 50) {
                // man
                img.setAttribute('src', 'img/woman.png');
            } else {
                // old man
                img.setAttribute('src', 'img/old-woman.png');
            }
        }

        resultado.style.textAlign = 'center';
        resultado.innerHTML = `Detectamos ${genero} de ${idade} anos.`;
        resultado.appendChild(img);
    }
}