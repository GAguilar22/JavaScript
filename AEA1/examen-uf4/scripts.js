const api = {
    method: "GET",
    headers: {
        accept: "application/json",
    },
}
// Elements del DOM
const llistaPersonatges = document.querySelector(".llistaPersonatges");
const botoPersonatges = document.querySelector(".showCharacters");
const buscador = document.querySelector(".buscador");
const botoBuscar = document.querySelector(".buscar");
const botoRaces = document.querySelector(".totesLesRaces");
const races = document.querySelector(".totesLesRaces");
const llistaRaces = document.querySelector(".llistaRaces");
const llistaPersonatgesAleatoris = document.querySelector(".llistaPersonatgesAleatoris");
const botoPersonatgesAleatoris = document.querySelector(".aleatori");
const botoBuscarRaces = document.querySelector(".buscarRaces");
const buscadorPerRaca = document.querySelector(".buscadorRaces");
const llistaRacesBuscar = document.querySelector(".llistaRacesBuscar");


document.addEventListener("DOMContentLoaded", async () => {
    getPersonatges();
    getRaces();
    botoMostrar(botoPersonatges, llistaPersonatges);
    botoMostrar(botoRaces, llistaRaces);
    botoPersonatgesAleatoris.addEventListener("click", () => {
        llistaPersonatgesAleatoris.innerHTML = ''; // Netegem la llista abans de mostrar els resultats
        llistaPersonatgesAleatoris.classList.remove("oculto"); // Assegurar que la llista sigui visible
        getPersonatgesAleatoris();
    });
    botoBuscar.addEventListener("click", () => {
        const nom = buscador.value.trim();
        if (nom) {
            buscarPersonatge(nom);
        }
    });
    botoBuscarRaces.addEventListener("click", () => {
        llistaRacesBuscar.innerHTML = ''; // Netegem la llista abans de mostrar els resultats
        const raca = buscadorPerRaca.value.trim();
        if (raca) {
            buscarPerRaca(raca);
        }
    });
});

async function getPersonatges() {
    try {
        const response = await fetchDades("https://dragonball-api.com/api/characters?page=1&limit=402", api);

        const personatges = response.items;

        // Mostrem els personatges al la llista que ja esta al html
        personatges.forEach((personatge) => {
            const personatgeElement = document.createElement('li');
            personatgeElement.innerHTML = `
                <h2>${personatge.name}</h2>
                <p>${personatge.race}</p>
                <img src="${personatge.image}">
            `;
            llistaPersonatges.appendChild(personatgeElement);
        });
    } catch (error) {
        console.error('Error:', error);
        llistaPersonatges.innerHTML = '<p>Error al cargar los personajes</p>';
    }
}

function botoMostrar(boto, llista) {
    boto.addEventListener("click", () => {
        llista.classList.toggle("oculto");
    });
}

async function buscarPersonatge(nom) {
    try {
        const response = await fetchDades("https://dragonball-api.com/api/characters?page=1&limit=402", api); // Si posava el nom del personatge no me'l trobava
        const personatges = response.items;

        // Filtrar per nom exacte (ignora majúscules/minúscules)
        const resultat = personatges.find(p => p.name.toLowerCase() === nom.toLowerCase()); // Passa el nom del personatge a mínuscules i compara el nom posat al buscador a minuscules tabme i ho compara

        if (resultat) {
            Swal.fire({
                title: resultat.name,
                text: `Raça: ${resultat.race}`
                    + `\n Gènere: ${resultat.gender}`
                    + `\n Ki màxim: ${resultat.maxKi}`,
                imageUrl: resultat.image,
            });
        } else {
            Swal.fire({
                title: "No s'ha trobat el personatge",
                text: `El personatge "${nom}" no existeix`,
                icon: "error",
                confirmButtonText: "Tornar a buscar",
            });
        }

    } catch (error) {
        console.error("Error a buscarPersonatge:", error);
        Swal.fire({
            title: "Error",
            text: "No s'ha pogut realitzar la cerca.",
            icon: "error",
        });
    }
}


async function getRaces() {
    try {
        const response = await fetchDades("https://dragonball-api.com/api/characters?page=1&limit=402", api);
        const personatges = response.items;

        // Array per guardar les races uniques
        const racesUniques = [];

        // Iterem sobre els personatges i afegim el valor de la raça al array si no existeix
        personatges.forEach((personatge) => {
            if (personatge.race && !racesUniques.includes(personatge.race)) {
                racesUniques.push(personatge.race);
            }
        });


        llistaRaces.innerHTML = '';

        // Mostrem el número de races
        const numRaces = document.createElement('p');
        numRaces.innerHTML = `<p>Hi ha ${racesUniques.length} races</p>`;
        llistaRaces.appendChild(numRaces);

        // Mostrem cada raça
        racesUniques.forEach((raça) => {
            const raceElement = document.createElement('li');
            raceElement.innerHTML = `<p>${raça}</p>`;
            llistaRaces.appendChild(raceElement);
        });

    } catch (error) {
        console.error('Error:', error);
        llistaRaces.innerHTML = '<p>Error al cargar las razas</p>';
    }
}

// Funció per generar 5 personatges aleatoris
async function getPersonatgesAleatoris() {
    try {
        const response = await fetchDades("https://dragonball-api.com/api/characters?page=1&limit=402", api);
        const personatges = response.items;

        // Generem 5 indices aleatoris
        const indicesAleatoris = [];
        while (indicesAleatoris.length < 5) {
            const index = Math.floor(Math.random() * personatges.length);
            if (!indicesAleatoris.includes(index)) {
                indicesAleatoris.push(index);
            }
        }

        // Mostrem els personatges aleatoris
        indicesAleatoris.forEach((index) => {
            const personatge = personatges[index];
            const personatgeElement = document.createElement('li');
            personatgeElement.innerHTML = `
                <h2>${personatge.name}</h2>
                <p> ${personatge.race}</p>
                <img src="${personatge.image}">`
                ;
            llistaPersonatgesAleatoris.appendChild(personatgeElement);
        })

    } catch (error){

    }
}

// Funció per buscar per raça
async function buscarPerRaca(raca){
    try {
        const response = await fetchDades("https://dragonball-api.com/api/characters?page=1&limit=402", api);
        const personatges = response.items;

        personatges.forEach((personatge) => {
            if (personatge.race && personatge.race.toLowerCase() === raca.toLowerCase()) {
                const personatgeElement = document.createElement('li');
                personatgeElement.innerHTML = `
                    <h2>${personatge.name}</h2>
                    <img src="${personatge.image}">`;
                llistaRacesBuscar.appendChild(personatgeElement);
            }
        });

    }catch{
        console.error("Error a buscarPerRaca:", error);
        Swal.fire({
            title: "Error",
            text: "No s'ha pogut realitzar la cerca.",
            icon: "error",
        });
    }
}

async function fetchDades(peticio) {
    try {
        const response = await fetch(peticio, api);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
        return [];
    }
}

async function fetchDades(peticio) {
    try {
        const response = await fetch(peticio, api);
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
        return [];
    }
}