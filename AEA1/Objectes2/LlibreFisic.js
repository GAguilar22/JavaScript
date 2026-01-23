const Llibre = require('./Llibre');

class LlibreFisic extends Llibre {
    constructor(titol, autor, tematica, exemplars) {
        super(titol, autor, tematica);
        this.exemplars = exemplars;
    }
}