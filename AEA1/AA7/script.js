const URL_FILMS = "https://ghibliapi.vercel.app/films";
const URL_LOCATIONS = "https://ghibliapi.vercel.app/locations";
const URL_PEOPLE = "https://ghibliapi.vercel.app/people";
const URL_SPECIES = "https://ghibliapi.vercel.app/species";

// --- APARTAT 1: LLISTAR PEL·LÍCULES ---
document.getElementById('btn-llistar').addEventListener('click', function () {
    fetch(URL_FILMS)
        .then(res => res.json())
        .then(info => {
            document.getElementById('total-pelicules').textContent = "Total de pel·lícules: " + info.length;

            let taula = `<table><tr><th>#</th><th>Imatge</th><th>Títol</th><th>Any</th></tr>`;
            info.forEach((film, index) => {
                taula += `<tr>
                    <td>${index + 1}</td>
                    <td><img src="${film.image}"></td>
                    <td>${film.title}</td>
                    <td>${film.release_date}</td>
                </tr>`;
            });
            taula += `</table>`;
            document.getElementById('taula-pelis').innerHTML = taula;
        });
});

// --- APARTAT 2: SELECTOR  ---
fetch(URL_FILMS)
    .then(res => res.json())
    .then(films => {
        const selector = document.getElementById('selector-id');
        films.forEach(peli => {
            let opcio = document.createElement('option');
            opcio.value = peli.id;
            opcio.textContent = peli.id + " - " + peli.title;
            selector.appendChild(opcio);
        });
    });

document.getElementById('selector-id').addEventListener('change', function () {
    const id = this.value;
    const descripcio = document.getElementById('descripcio-pelicula');
    const llistaPersona = document.getElementById('personatges-peli');

    if (!id) {
        descripcio.innerHTML = "";
        llistaPersona.innerHTML = "";
        return;
    }

    fetch(URL_FILMS + "/" + id)
        .then(res => res.json())
        .then(film => {
            descripcio.innerHTML = "<strong>Descripció:</strong> " + film.description;
            llistaPersona.innerHTML = "";

            let promesa = film.people.map(url => {
                if (url.endsWith('/people/')) return Promise.resolve(null);
                return fetch(url).then(r => r.json());
            });

            //He d'utilitzar Promise.all he d'esperar a obtenir tots els resultats del fetch per a crear la taula html
            Promise.all(promesa).then(personatges => {
                let valids = personatges.filter(p => p !== null);
                if (valids.length === 0) {
                    llistaPersona.innerHTML = "<p>Sense personatges registrats</p>";
                    return;
                }

                let taula = `<table><tr><th>Nom</th><th>Gènere</th><th>Edat</th></tr>`;
                valids.forEach(personatge => {
                    taula += `<tr><td>${personatge.name}</td><td>${personatge.gender}</td><td>${personatge.age}</td></tr>`;
                });
                taula += `</table>`;
                llistaPersona.innerHTML = taula;
            });
        });
});

// --- APARTAT 3: LOCALITZACIONS ---
document.getElementById('btn-locs').addEventListener('click', function () {
    fetch(URL_LOCATIONS)
        .then(res => res.json())
        .then(llocs => {
            let taula = `<table><tr><th>#</th><th>Nom</th><th>Clima</th><th>Terreny</th></tr>`;
            llocs.forEach((lloc, index) => {
                taula += `<tr><td>${index + 1}</td><td>${lloc.name}</td><td>${lloc.climate || 'No disponible'}</td><td>${lloc.terrain || 'No disponible'}</td></tr>`;
            });
            taula += `</table>`;
            document.getElementById('taula-locs').innerHTML = taula;
        });
});

// --- APARTAT 4: 5 PERSONATGES ALEATORIS ---
document.getElementById('btn-random').addEventListener('click', function () {
    fetch(URL_PEOPLE)
        .then(res => res.json())
        .then(personatges => {
            let taula = `<table><tr><th>Nom</th><th>Gènere</th><th>ID</th></tr>`;
            // Barrejar l'array i agafar els 5 primers
            let personatgesAleatoris = personatges.sort(() => Math.random() - 0.5).slice(0, 5);

            personatgesAleatoris.forEach(personatge => {
                taula += `<tr><td>${personatge.name}</td><td>${personatge.gender}</td><td>${personatge.id}</td></tr>`;
            });
            taula += `</table>`;
            document.getElementById('taula-random').innerHTML = taula;
        });
});

// --- APARTAT 5: COMPTAR ESPÈCIES ---
document.getElementById('btn-especies').addEventListener('click', function () {
    fetch(URL_SPECIES)
        .then(res => res.json())
        .then(especies => {
            let taula = `<table><tr><th>#</th><th>Espècie</th><th>Nombre de personatges</th></tr>`;
            especies.forEach((especie, index) => {
                taula += `<tr><td>${index + 1}</td><td>${especie.name}</td><td>${especie.people.length}</td></tr>`;
            });
            taula += `</table>`;
            document.getElementById('llista-especies').innerHTML = taula;
        });
});
