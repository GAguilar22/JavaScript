let valorUs = prompt("Escriu les dades en format CSV:");

let files = valorUs.split(";");
let taula = files.map(fila => fila.split(","));

// Resultat en format text pla
// let taulaFinal = "";
// taula.forEach(fila => {
//     taulaFinal += fila.join(" | ") + "<br>"
// })


// Resultat en format taula HTML
let taulaHTML = "<table border='1' cellpadding='5' cellspacing='0'>";

taula.forEach(fila => {
    taulaHTML += "<tr>"; // fila
    fila.forEach(cella => {
        taulaHTML += "<td>" + cella + "</td>"; // columna
    });
    taulaHTML += "</tr>";
});

taulaHTML += "</table>";
//Format taula
document.getElementById("taula").innerHTML = taulaHTML;

//Format text
// document.getElementById("taula").innerHTML = taulaFinal;