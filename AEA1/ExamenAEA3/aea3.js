document.addEventListener('DOMContentLoaded', function () {

    //Exercici 1
    document.getElementById("camp1").value = "Gerard Aguilar";

    //Exercici 2
    document.getElementById('camp1').addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            const camp2 = document.getElementById('camp2');
            const novaOpcio = document.createElement('option');
            novaOpcio.value = this.value;
            novaOpcio.text = this.value;
            camp2.appendChild(novaOpcio);
        }
    });


    //Exercici 3
    const regEx = /^(0[1-9]|[12][0-9]|3[01])-(0[1-9]|1[0-2])-\d{4}$/;

    const btnRegex = document.querySelectorAll('button')[1];

    btnRegex.addEventListener('click', function () {

        const valor1 = document.getElementById('camp1').value;

        if (regEx.test(valor1)) {
            alert('RegEx correcte!');
        } else {
            alert('No cumpleix el RegEx!');
        }
    });


    //Exercici 4
    const btnTitol = document.querySelectorAll('button')[2];

    btnTitol.addEventListener('click', function () {
        const titol = document.querySelector('h1');

        let arrayParaules = titol.textContent.split(' ');

        for (let i = arrayParaules.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));


            const barreja = arrayParaules[i];
            arrayParaules[i] = arrayParaules[j];
            arrayParaules[j] = barreja;
        }

        let nouTitol = arrayParaules;

        titol.textContent = nouTitol.join(' ');
    });



    //Exercici 5
    $("button:contains('Llibreries')").click(function () {
        $("h1").slideToggle("slow");
    });

})