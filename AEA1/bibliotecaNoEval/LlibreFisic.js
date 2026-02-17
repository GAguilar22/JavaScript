const Llibre = require('./Llibre');

class LlibreFisic extends Llibre {
    #exemplars;

    constructor(titol, autor, tematica, exemplars) {
        super(titol, autor, tematica);
        this.#exemplars = exemplars;
    }

    get exemplars() {
        return this.#exemplars;
    }

    prestar() {
        if (this.#exemplars > 0) {
            this.#exemplars--;
            console.log(`Llibre físic prestat: ${this.titol}. Exemplars restants: ${this.#exemplars}`);
            return true;
        } else {
            console.error(`Error: No queden exemplars de ${this.titol}`);
            return false;
        }
    }

    retornar() {
        this.#exemplars++;
        console.log(`Llibre físic retornat: ${this.titol}. Exemplars disponibles: ${this.#exemplars}`);
        return true;
    }
}

module.exports = LlibreFisic;
