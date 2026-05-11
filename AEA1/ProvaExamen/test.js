document.addEventListener('DOMContentLoaded', function () {

    /* =========================================
       EXERCICI 1 - Assignar un valor a camp1
       ========================================= */

    document.getElementById("camp1").value = "Gerard Aguilar";


    /* =========================================
       EXERCICI 2 - Esdeveniment amb el botó central del ratolí
       Quan es fa middle-click sobre el botó "Esdeveniments"
       apareix un alert dient "Hola!"
       ========================================= */

    document.addEventListener("mousedown", function (event) {
        if (event.button === 0 && event.target.textContent === "Esdeveniments") {
            alert("Hola!");
        }
    });


    /* =========================================
       EXERCICI 3 - Omplir el select i validar amb regex
       ========================================= */

    // Omplim el <select> amb opcions
    let camp2 = document.getElementById("camp2");
    let ciutats = ["Barcelona", "Girona", "Lleida", "Tarragona"];

    for (let i = 0; i < ciutats.length; i++) {
        let opcio = document.createElement("option");
        opcio.textContent = ciutats[i];
        camp2.appendChild(opcio);
    }

    // Quan es clica el botó "Expressions regulars", validem el patró
    let botoRegex = document.querySelector("button:nth-of-type(2)");
    botoRegex.addEventListener("click", function () {
        let patroEscrit = document.getElementById("camp1").value;
        let ciutatSeleccionada = camp2.selectedOptions[0].textContent;

        // Protegim el codi per si el patró no és vàlid
        try {
            let regex = new RegExp(patroEscrit);
            if (regex.test(ciutatSeleccionada)) {
                alert("Es compleix el patró.");
            } else {
                alert("No es compleix el patró.");
            }
        } catch (error) {
            alert("El patró regex no és vàlid.");
        }
    });


    /* =========================================
       EXERCICI 4 - DOM: barrejar paraules del títol
       ========================================= */

    let botoDOM = document.querySelector("button:nth-of-type(3)");
    botoDOM.addEventListener("click", function () {
        let titol = document.querySelector("h1");
        let paraules = titol.textContent.split(" ");
        let paraulesMesclades = barrejar(paraules);
        titol.textContent = paraulesMesclades.join(" ");
    });

    // Funció que barreja un array (algorisme Fisher-Yates)
    function barrejar(array) {
        let copia = array.slice(); // fem una còpia per no modificar l'original
        for (let i = copia.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            let temp = copia[i];
            copia[i] = copia[j];
            copia[j] = temp;
        }
        return copia;
    }



    /* =========================================
       EXERCICI 6 - Animació: amagar/mostrar el títol
       S'executen les dues versions cada vegada que es clica
       ========================================= */

    let botoLlibreries = document.querySelector("button:nth-of-type(5)");
    botoLlibreries.addEventListener("click", function () {

        // --- Versió amb JavaScript pur ---
        let titol = document.querySelector("h1");
        if (titol.style.visibility === "hidden") {
            titol.style.visibility = "visible";
        } else {
            titol.style.visibility = "hidden";
        }

        // --- Versió amb jQuery (fadeToggle) ---
        $("h1").fadeToggle("slow");
    });

});
