// Importa las clases a testear
const { Publicacio, Llibre, Revista, ArticleRecerca, Usuari, Biblioteca } = require('./a4'); 

// Funció de test per provar les funcionalitats de les classes
function runTests() {
    console.log("Iniciant el joc de proves...");

    // Test de la classe Publicacio i les seves subclasses
    const llibre = new Llibre("El senyor dels anells", "J.R.R. Tolkien", 1954, 1178);
    const revista = new Revista("National Geographic", "Diversos Autors", 2023, 128);
    const article = new ArticleRecerca("Intel·ligència Artificial", "John Doe", 2022, "Tecnologia", 150);

    // Test dels getters i setters de Publicacio i subclasses
    console.assert(llibre.titol === "El senyor dels anells", "Error en el getter del títol de Llibre");
    console.assert(revista.autor === "Diversos Autors", "Error en el getter de l'autor de Revista");
    console.assert(article.anyPublicacio === 2022, "Error en el getter de l'any de publicació de ArticleRecerca");

    llibre.titol = "El Hobbit";
    console.assert(llibre.titol === "El Hobbit", "Error en el setter del títol de Llibre");

    // Test del mètode obtenirResum per cada subclasse
    console.assert(
        llibre.obtenirResum() === "Llibre: El Hobbit de J.R.R. Tolkien, 1178 pàgines.",
        "Error en el mètode obtenirResum de Llibre"
    );
    console.assert(
        revista.obtenirResum() === "Revista: National Geographic de Diversos Autors, Número d'edició: 128.",
        "Error en el mètode obtenirResum de Revista"
    );
    console.assert(
        article.obtenirResum() === "Article de Recerca: Intel·ligència Artificial de John Doe, Tema: Tecnologia, Cites: 150.",
        "Error en el mètode obtenirResum de ArticleRecerca"
    );

    // Test de la classe Usuari
    const usuari = new Usuari("Maria", "Garcia");
    usuari.afegirAFavorits(llibre);
    usuari.afegirAFavorits(article);

    console.log("Publicacions favorites (esperat 2):", usuari.mostrarFavorits()?.length === 2);

    // Provar mostrarFavorits per veure si mostra el resum correcte de les publicacions favorites
    console.log("Mostrant publicacions favorites de l'usuari:");
    usuari.mostrarFavorits(); // Ha de mostrar el resum de llibre i article

    // Test de la classe Biblioteca
    const biblioteca = new Biblioteca();
    biblioteca.afegirPublicacio(llibre);
    biblioteca.afegirPublicacio(revista);
    biblioteca.afegirPublicacio(article);

    // Test de buscarPerTitol
    const resultatBuscar = biblioteca.buscarPerTitol("El Hobbit");
    console.assert(resultatBuscar.length === 1 && resultatBuscar[0] === llibre, "Error en el mètode buscarPerTitol");

    // Test de mostrarPublicacions (verificar la sortida manualment)
    console.log("Mostrant publicacions a la biblioteca:");
    biblioteca.mostrarPublicacions();

    // Test de filtrarPerTipus
    const llibres = biblioteca.filtrarPerTipus(Llibre);
    console.assert(llibres.length === 1 && llibres[0] === llibre, "Error en el mètode filtrarPerTipus per Llibre");

    const revistes = biblioteca.filtrarPerTipus(Revista);
    console.assert(revistes.length === 1 && revistes[0] === revista, "Error en el mètode filtrarPerTipus per Revista");

    const articles = biblioteca.filtrarPerTipus(ArticleRecerca);
    console.assert(articles.length === 1 && articles[0] === article, "Error en el mètode filtrarPerTipus per ArticleRecerca");

    console.log("Totes les proves han estat realitzades.");
}

// Executar les proves
runTests();
