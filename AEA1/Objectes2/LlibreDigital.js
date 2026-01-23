const Llibre = require('./Llibre');

class LlibreDigital extends Llibre {
    constructor(titol, autor, tematica, quotaDescarrega) {
        super(titol, autor, tematica);
        this.quotaDescarrega = quotaDescarrega;
    }
}