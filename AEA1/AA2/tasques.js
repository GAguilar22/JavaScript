
const tasques = [];
let estat = "No completada";
let id = 1;

function afegirTasca(mostrarTasques) {
    // Demanem el nom de la nova tasca a l'usuari
    let nomTasca = prompt("Introdueix el nom de la tasca");
    if(nomTasca == ""){
        alert("És obligatori posar un nom a la tasca")
        return;
    }
        // Afegim la tasca al array 
        tasques.push([nomTasca, estat, id]);
        // Incrementem id
        id++;
    return mostrarTasques(tasques);
}

function eliminarTasca(mostrarTasques) {
    // Demanem l'id i ho convertim a INT
    let tasca = parseInt(prompt("Quina tasca vols esborrar? Escriu el seu id"));
    if(isNaN(tasca) || tasca < 1 || tasca > (id - 1)) {
        alert("ID no vàlid");
        return;
    }
    // Amb el id -1 ja tenim la posició a borrar de l'array
    tasques.splice((tasca -1), 1);
    id--;
    
    //Al borrar un id aleatori, hem de modificar tots els ids de l'array per a que funcioni correctament la funcio de mostrarTasques
    for(let i = 0; i < tasques.length; i++) {
        tasques[i][2] = i + 1; //Assignem un nou ID que sigui igual a la seva posició a l'array
    }
    
    return mostrarTasques(tasques);
}

function canviarEstat(mostrarTasques) {
    // id tasca i ho convertim a INT
    let idCanv = parseInt(prompt("Quina tasca vols modificar? Escriu el seu id"));
    if(isNaN(idCanv) || idCanv < 1 || idCanv > (id - 1)) {
        alert("ID no vàlid");
        return;
    }
    // posicio de l'array
    idCanv = idCanv - 1;
    let nouEstat = "Completada";

    // Comprovem l'estat actual de la tasca i el modifiquem segons el que arribi
    //Dins l'array tasques, apuntem a la posició que ens dona l'usuari 
    // i li modifiquem l'estat a la posició 1 (on es troba "estat" dins l'array)
    if(tasques[idCanv][1] === "Completada"){
        nouEstat = "No completada";
        tasques[idCanv][1] = nouEstat;
    }else{
        nouEstat = "Completada";
        tasques[idCanv][1] = nouEstat;
    }
    return mostrarTasques(tasques);
}

function mostrarTasques() {
    //Creem una variable per a guardar el foreach de l'array general
    //Ja que aixi cada com que afegim una es guarda, sense duplicar el resultat
    let llista = "";
    console.log("Llista de tasques:");

    if(id >= 1){
            tasques.forEach(function(tasca, index) {
                llista +="<tr><td>" + tasca[0] + "</td><td>" + tasca[1] + "</td><td>" + tasca[2] + "</td></tr>";
            });
            document.getElementById("tasques").innerHTML =  "<table><thead><tr><th>Nom</th><th>Estat</th><th>ID</th></tr></thead><tbody>" + llista + "</tbody></table>";
        }else{
            document.getElementById("tasques").innerHTML = "No hi ha tasques";
        }
    }


