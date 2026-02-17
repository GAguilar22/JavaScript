const LlibreFisic = require('./LlibreFisic');
const LlibreDigital = require('./LlibreDigital');
const Soci = require('./Soci');
const Biblioteca = require('./Biblioteca');

const biblio = new Biblioteca();

// 1. Create and add books
const llibre1 = new LlibreFisic("El Quijote", "Miguel de Cervantes", "Clàssic", 3);
const llibre2 = new LlibreFisic("Harry Potter", "J.K. Rowling", "Fantasia", 2);
const llibre3 = new LlibreDigital("Clean Code", "Robert C. Martin", "Tecnologia", 5);

biblio.afegirLlibre(llibre1);
biblio.afegirLlibre(llibre2);
biblio.afegirLlibre(llibre3);

// 2. Create and add members
const soci1 = new Soci("Joan Garcia", "S001");
const soci2 = new Soci("Maria López", "S002");
const soci3 = new Soci("Anna Puig", "S003");

biblio.afegirSoci(soci1);
biblio.afegirSoci(soci2);
biblio.afegirSoci(soci3);

console.log("--- INICI DE LA SIMULACIÓ ---");

// 3. Loans
console.log("\n> Realitzant préstecs...");
biblio.prestarLlibre("El Quijote", "S001", "2023-10-01");
biblio.prestarLlibre("Harry Potter", "S002", "2023-10-02");
biblio.prestarLlibre("Clean Code", "S001", "2023-10-03");

// Test: Exhaust variants
console.log("\n> Provant d'esgotar exemplars...");
biblio.prestarLlibre("Harry Potter", "S001", "2023-10-04"); // Takes the 2nd copy
biblio.prestarLlibre("Harry Potter", "S003", "2023-10-05"); // Should fail, no copies left

// 4. Returns
console.log("\n> Realitzant retorns...");
biblio.retornarLlibre("El Quijote", "S001", "2023-10-15");
biblio.retornarLlibre("Harry Potter", "S002", "2023-10-16");

// Test: Invalid return
console.log("\n> Provant retorn invàlid...");
biblio.retornarLlibre("Clean Code", "S002", "2023-10-17"); // Did not borrow it

console.log("\n=========================");
biblio.generarInforme();
