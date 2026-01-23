class Llibre {
    constructor(titol, autor, tematica) {
        this.titol = titol;
        this.autor = autor;
        this.tematica = tematica;
    }

    prestar() {
        console.log("Llibre prestat" + this.titol + " de " + this.autor + " de la tematica " + this.tematica);
    }
}