class Llibre {
    constructor(titol, autor, tematica) {
        this._titol = titol;
        this._autor = autor;
        this._tematica = tematica;
    }

    get titol() { return this._titol; }
    get autor() { return this._autor; }
    get tematica() { return this._tematica; }

    prestar() {
        console.log("Mètode prestar no implementat");
    }

    retornar() {
        console.log("Mètode retornar no implementat");
    }
}

module.exports = Llibre;
