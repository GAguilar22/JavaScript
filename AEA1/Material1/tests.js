// Importa las clases a testear
const { inventari } = require('./inventari');

console.log("== Test inventari.js ==");

console.log("Afegint nou joc...");
let nouId = inventari.afegirJoc("Elden Ring", "PlayStation 5", 4);
console.log("Nou id:", nouId);

console.log("Intentant afegir duplicat...");
let duplicat = inventari.afegirJoc("Elden Ring", "PlayStation 5", 2);
console.log("Resultat esperat null:", duplicat);

console.log("Actualitzant estoc...");
let actualitzat = inventari.actualitzarEstoc(nouId, 10);
console.log("Actualització correcta:", actualitzat);

console.log("Filtrant per plataforma...");
let ps5 = inventari.filtrarPerPlataforma("PlayStation 5");
console.log("Jocs PS5:", ps5);

console.log("Llistant disponibles...");
console.log(inventari.llistarDisponibles());

console.log("Joc amb més estoc:");
console.log(inventari.jocAmbMesEstoc());


/* Aquest joc de proves ha de mostrar per consola el següent:

== Test inventari.js ==
Afegint nou joc...
Nou id: 3
Intentant afegir duplicat...
Resultat esperat null: null
Actualitzant estoc...
Actualització correcta: true
Filtrant per plataforma...
Jocs PS5: [
  {
    id: 3,
    titol: 'Elden Ring',
    plataforma: 'PlayStation 5',
    estoc: 10
  }
]
Llistant disponibles...
[
  {
    id: 1,
    titol: 'Zelda: Breath of the Wild',
    plataforma: 'Nintendo Switch',
    estoc: 3
  },
  { id: 2, titol: 'God of War', plataforma: 'PlayStation 4', estoc: 5 },
  {
    id: 3,
    titol: 'Elden Ring',
    plataforma: 'PlayStation 5',
    estoc: 10
  }
]
Joc amb més estoc:
[
  {
    id: 3,
    id: 3,
    titol: 'Elden Ring',
    plataforma: 'PlayStation 5',
    estoc: 10
  }
] */
