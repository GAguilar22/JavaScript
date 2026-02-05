// Exercici 3 EAC3

// Defineix aquí les classes descrites en l'enunciat

class Publicacio {
    #titol;
    #autor;
    #anyPublicacio;

    constructor(titol, autor, anyPublicacio) {
        this.#titol = titol;
        this.#autor = autor;
        this.#anyPublicacio = anyPublicacio;
    }

    get titol() {
        return this.#titol;
    }

    set titol(nouTitol) {
        this.#titol = nouTitol;
    }

    get autor() {
        return this.#autor;
    }

    set autor(nouAutor) {
        this.#autor = nouAutor;
    }

    get anyPublicacio() {
        return this.#anyPublicacio;
    }

    set anyPublicacio(nouAny) {
        this.#anyPublicacio = nouAny;
    }

    mostrarInfo() {
        console.log("Títol: " + this.#titol + ", Autor: " + this.#autor + ", Any: " + this.#anyPublicacio);
    }

    //Metode abstracte
    obtenirResum() {
    }
}



class Llibre extends Publicacio {
    #nombrePagines;

    constructor(titol, autor, anyPublicacio, nombrePagines) {
        super(titol, autor, anyPublicacio);
        this.#nombrePagines = nombrePagines;
    }

    obtenirResum() {
        return "Llibre: " + this.titol + " de " + this.autor + ", " + this.#nombrePagines + " pàgines.";
    }
}

class Revista extends Publicacio {
    #numero;

    constructor(titol, autor, anyPublicacio, numero) {
        super(titol, autor, anyPublicacio);
        this.#numero = numero;
    }

    obtenirResum() {
        return "Revista: " + this.titol + " de " + this.autor + ", Número d'edició: " + this.#numero + ".";
    }
}

class ArticleRecerca extends Publicacio {
    #tema;
    #nombreCites;

    constructor(titol, autor, anyPublicacio, tema, nombreCites) {
        super(titol, autor, anyPublicacio);
        this.#tema = tema;
        this.#nombreCites = nombreCites;
    }

    obtenirResum() {
        return "Article de Recerca: " + this.titol + " de " + this.autor + ", Tema: " + this.#tema + ", Cites: " + this.#nombreCites + ".";
    }
}


class Usuari {
    #nom;
    #cognom;
    #publicacionsFavorites;

    constructor(nom, cognom) {
        this.#nom = nom;
        this.#cognom = cognom;
        this.#publicacionsFavorites = [];
    }

    afegirAFavorits(publicacio) {
        this.#publicacionsFavorites.push(publicacio);
    }

    mostrarFavorits() {
        this.#publicacionsFavorites.forEach(publicacio => {
            console.log(publicacio.obtenirResum());
        });
        return this.#publicacionsFavorites;
    }
}


class Biblioteca {
    #publicacions;

    constructor() {
        this.#publicacions = [];
    }

    afegirPublicacio(publicacio) {
        this.#publicacions.push(publicacio);
    }

    buscarPerTitol(titol) {
        return this.#publicacions.filter(p => p.titol === titol);
    }

    mostrarPublicacions() {
        this.#publicacions.forEach(publicacio => {
            console.log(publicacio.obtenirResum());
        });
    }

    filtrarPerTipus(tipus) {
        return this.#publicacions.filter(p => p instanceof tipus);
    }
}

// No canviïs aquesta línia de codi. Serveix perquè les funcions d'aquest fitxer es puguin usar en el fitxer de tests.
module.exports = { Publicacio, Llibre, Revista, ArticleRecerca, Usuari, Biblioteca };