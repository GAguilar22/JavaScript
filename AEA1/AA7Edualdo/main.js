// URLs de l'API
const URL_FILMS = "https://ghibliapi.vercel.app/films";
const URL_LOCATIONS = "https://ghibliapi.vercel.app/locations";
const URL_PEOPLE = "https://ghibliapi.vercel.app/people";
const URL_SPECIES = "https://ghibliapi.vercel.app/species";

// --- APARTAT 1: LLISTAR PEL·LÍCULES ---
document.getElementById('btn-llistar').addEventListener('click', function() {
    fetch(URL_FILMS)
        .then(res => res.json())
        .then(data => {
            document.getElementById('total-pelis').textContent = "Nombre total de pel·lícules: " + data.length;
            
            let taula = `<table><tr><th>Títol</th><th>Any</th><th>Imatge</th></tr>`;
            data.forEach(film => {
                taula += `<tr>
                    <td>${film.title}</td>
                    <td>${film.release_date}</td>
                    <td><img src="${film.image}"></td>
                </tr>`;
            });
            taula += `</table>`;
            document.getElementById('taula-pelis').innerHTML = taula;
        });
});

// --- APARTAT 2: CERCADOR I SELECTOR (Càrrega inicial) ---
// Primer omplim el selector només obrir la pàgina
fetch(URL_FILMS)
    .then(res => res.json())
    .then(films => {
        const selector = document.getElementById('selector-id');
        films.forEach(f => {
            let opt = document.createElement('option');
            opt.value = f.id;
            opt.textContent = f.title;
            selector.appendChild(opt);
        });
});

document.getElementById('selector-id').addEventListener('change', function() {
    const id = this.value;
    if (!id) return;

    fetch(URL_FILMS + "/" + id)
        .then(res => res.json())
        .then(film => {
            document.getElementById('descripcio-peli').textContent = film.description;
            const llistaPerso = document.getElementById('personatges-peli');
            llistaPerso.innerHTML = ""; // Netejar

            // Carreguem noms dels personatges
            film.people.forEach(url => {
                if (url.endsWith('/people/')) {
                    llistaPerso.innerHTML += "<p>Error en carregar el personatge</p>";
                    return;
                }
                fetch(url).then(r => r.json()).then(p => {
                    let li = document.createElement('li');
                    li.textContent = p.name;
                    llistaPerso.appendChild(li);
                });
            });
        });
});

// --- APARTAT 3: LOCALITZACIONS ---
document.getElementById('btn-locs').addEventListener('click', function() {
    fetch(URL_LOCATIONS)
        .then(res => res.json())
        .then(locs => {
            let taula = `<table><tr><th>Nom</th><th>Clima</th><th>Terreny</th></tr>`;
            locs.forEach(l => {
                taula += `<tr><td>${l.name}</td><td>${l.climate}</td><td>${l.terrain}</td></tr>`;
            });
            taula += `</table>`;
            document.getElementById('taula-locs').innerHTML = taula;
        });
});

// --- APARTAT 4: 5 PERSONATGES ALEATORIS ---
document.getElementById('btn-random').addEventListener('click', function() {
    fetch(URL_PEOPLE)
        .then(res => res.json())
        .then(people => {
            let taula = `<table><tr><th>Nom</th><th>Gènere</th><th>ID</th></tr>`;
            // Barrejar l'array i agafar els 5 primers
            let randoms = people.sort(() => 0.5 - Math.random()).slice(0, 5);
            
            randoms.forEach(p => {
                taula += `<tr><td>${p.name}</td><td>${p.gender}</td><td>${p.id}</td></tr>`;
            });
            taula += `</table>`;
            document.getElementById('taula-random').innerHTML = taula;
        });
});

// --- APARTAT 5: COMPTAR ESPÈCIES ---
document.getElementById('btn-especies').addEventListener('click', function() {
    fetch(URL_SPECIES)
        .then(res => res.json())
        .then(species => {
            let resultat = "<ul>";
            species.forEach(s => {
                // El nombre de personatges és la longitud de l'array 'people' dins de cada espècie
                resultat += `<li><strong>${s.name}</strong>: ${s.people.length} personatges</li>`;
            });
            resultat += "</ul>";
            document.getElementById('llista-especies').innerHTML = resultat;
        });
});