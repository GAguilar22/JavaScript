const API_BASE = 'https://ghibliapi.vercel.app';

// APARTAT 1 — Llistar pel·lícules
function llistarPelicules() {
    const tbody = document.getElementById('tbody-pelicules');
    const totalP = document.getElementById('total-pelicules');

    tbody.innerHTML = '<tr><td colspan="4">Carregant...</td></tr>';

    fetch(`${API_BASE}/films`)
        .then(function (resposta) {
            if (!resposta.ok) {
                throw new Error(`Error HTTP: ${resposta.status}`);
            }
            return resposta.json();
        })
        .then(function (pelicules) {
            mostrarTaulaPelicules(pelicules);
        })
        .catch(function (error) {
            tbody.innerHTML = `<tr><td colspan="4">Error: ${error.message}</td></tr>`;
        });
}

function mostrarTaulaPelicules(pelicules) {
    const tbody = document.getElementById('tbody-pelicules');
    const totalP = document.getElementById('total-pelicules');
    const taula = document.getElementById('taula-pelicules');
    const total = pelicules.length;

    // Mostrem el total i la taula
    totalP.textContent = `Total de pel·lícules: ${total}`;
    taula.style.display = '';

    // Generem les files
    tbody.innerHTML = '';
    pelicules.forEach(function (pelicula, index) {
        const fila = document.createElement('tr');
        fila.innerHTML = `
            <td>${index + 1}</td>
            <td><img src="${pelicula.image}" alt="${pelicula.title}" width="60"></td>
            <td>${pelicula.title}</td>
            <td>${pelicula.release_date}</td>
        `;
        tbody.appendChild(fila);
    });
}

// APARTAT 2 — Cercar una pel·lícula per ID

// Omple el <select> amb totes les pel·lícules (ID + títol)
function carregarSelectorPelicules() {
    const selector = document.getElementById('selector-pelicules');

    fetch(`${API_BASE}/films`)
        .then(function (resposta) {
            if (!resposta.ok) {
                throw new Error(`Error HTTP: ${resposta.status}`);
            }
            return resposta.json();
        })
        .then(function (pelicules) {
            // Buidem el selector i afegim l'opció per defecte
            selector.innerHTML = '<option value="">-- Selecciona una pel·lícula --</option>';

            pelicules.forEach(function (pelicula) {
                const opcio = document.createElement('option');
                opcio.value = pelicula.id;
                opcio.textContent = pelicula.id + ' — ' + pelicula.title;
                selector.appendChild(opcio);
            });

            selector.style.display = '';
        })
        .catch(function (error) {
            alert('Error en carregar les pel·lícules: ' + error.message);
        });
}

// S'executa quan l'usuari selecciona una pel·lícula del selector
function mostrarDetallPelicula() {
    const selector = document.getElementById('selector-pelicules');
    const id = selector.value;
    const descripcioDiv = document.getElementById('descripcio-pelicula');
    const taula = document.getElementById('taula-personatges');
    const tbody = document.getElementById('tbody-personatges');

    // Si s'ha escollit l'opció per defecte, buidem i sortim
    if (!id) {
        descripcioDiv.innerHTML = '';
        taula.style.display = 'none';
        return;
    }

    descripcioDiv.innerHTML = '<p>Carregant...</p>';
    taula.style.display = 'none';

    // Primer obtenim les dades de la pel·lícula concreta
    fetch(`${API_BASE}/films/${id}`)
        .then(function (resposta) {
            if (!resposta.ok) {
                throw new Error(`Error HTTP: ${resposta.status}`);
            }
            return resposta.json();
        })
        .then(function (pelicula) {
            // Mostrem la descripció
            descripcioDiv.innerHTML = '<p><strong>Descripció:</strong> ' + pelicula.description + '</p>';

            // Filtrem les URLs de persones vàlides (descartem les buides)
            const urlsPersones = pelicula.people.filter(function (url) {
                return !url.endsWith('/people/');
            });

            if (urlsPersones.length === 0) {
                tbody.innerHTML = '<tr><td colspan="3">No hi ha personatges registrats per aquesta pel·lícula.</td></tr>';
                taula.style.display = '';
                return;
            }

            // Opció A: obtenim tots els personatges i filtrem els de la pel·lícula
            fetch(`${API_BASE}/people`)
                .then(function (resposta) {
                    return resposta.json();
                })
                .then(function (totsElsPersonatges) {
                    const personatgesDeLaPeli = totsElsPersonatges.filter(function (persona) {
                        return urlsPersones.includes(persona.url);
                    });

                    tbody.innerHTML = '';
                    personatgesDeLaPeli.forEach(function (persona) {
                        const fila = document.createElement('tr');
                        fila.innerHTML = `
                            <td>${persona.name}</td>
                            <td>${persona.gender}</td>
                            <td>${persona.age}</td>
                        `;
                        tbody.appendChild(fila);
                    });

                    taula.style.display = '';
                });
        })
        .catch(function (error) {
            descripcioDiv.innerHTML = '<p>Error: ' + error.message + '</p>';
        });
}

// APARTAT 3 — Llistat de localitzacions
function llistarLocalitzacions() {
    const tbody = document.getElementById('tbody-localitzacions');
    const totalP = document.getElementById('total-localitzacions');
    const taula = document.getElementById('taula-localitzacions');

    tbody.innerHTML = '<tr><td colspan="4">Carregant...</td></tr>';

    fetch(`${API_BASE}/locations`)
        .then(function (resposta) {
            if (!resposta.ok) {
                throw new Error(`Error HTTP: ${resposta.status}`);
            }
            return resposta.json();
        })
        .then(function (localitzacions) {
            totalP.textContent = 'Total de localitzacions: ' + localitzacions.length;
            taula.style.display = '';

            tbody.innerHTML = '';
            localitzacions.forEach(function (lloc, index) {
                const fila = document.createElement('tr');
                fila.innerHTML = `
                    <td>${index + 1}</td>
                    <td>${lloc.name}</td>
                    <td>${lloc.climate || 'No disponible'}</td>
                    <td>${lloc.terrain || 'No disponible'}</td>
                `;
                tbody.appendChild(fila);
            });
        })
        .catch(function (error) {
            tbody.innerHTML = `<tr><td colspan="4">Error: ${error.message}</td></tr>`;
        });
}

// APARTAT 4 — 5 personatges aleatoris
function mostrarPersonatgesAleatoris() {
    const tbody = document.getElementById('tbody-aleatoris');
    const taula = document.getElementById('taula-aleatoris');

    tbody.innerHTML = '<tr><td colspan="3">Carregant...</td></tr>';
    taula.style.display = '';

    fetch(`${API_BASE}/people`)
        .then(function (resposta) {
            if (!resposta.ok) {
                throw new Error(`Error HTTP: ${resposta.status}`);
            }
            return resposta.json();
        })
        .then(function (personatges) {
            // Barregem l'array aleatòriament i agafem els 5 primers
            const cinc = personatges
                .sort(function () { return Math.random() - 0.5; })
                .slice(0, 5);

            tbody.innerHTML = '';
            cinc.forEach(function (persona) {
                const fila = document.createElement('tr');
                fila.innerHTML = `
                    <td>${persona.name}</td>
                    <td>${persona.gender}</td>
                    <td>${persona.id}</td>
                `;
                tbody.appendChild(fila);
            });
        })
        .catch(function (error) {
            tbody.innerHTML = `<tr><td colspan="3">Error: ${error.message}</td></tr>`;
        });
}

// APARTAT 5 — Comptar les espècies
function comptarEspecies() {
    const tbody = document.getElementById('tbody-especies');
    const taula = document.getElementById('taula-especies');

    tbody.innerHTML = '<tr><td colspan="3">Carregant...</td></tr>';
    taula.style.display = '';

    fetch(`${API_BASE}/species`)
        .then(function (resposta) {
            if (!resposta.ok) {
                throw new Error(`Error HTTP: ${resposta.status}`);
            }
            return resposta.json();
        })
        .then(function (especies) {
            tbody.innerHTML = '';
            especies.forEach(function (especie, index) {
                const fila = document.createElement('tr');
                fila.innerHTML = `
                    <td>${index + 1}</td>
                    <td>${especie.name}</td>
                    <td>${especie.people.length}</td>
                `;
                tbody.appendChild(fila);
            });
        })
        .catch(function (error) {
            tbody.innerHTML = `<tr><td colspan="3">Error: ${error.message}</td></tr>`;
        });
}
