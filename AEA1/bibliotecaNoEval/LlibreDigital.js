const Llibre = require('./Llibre');

class LlibreDigital extends Llibre {
    #quota;

    constructor(titol, autor, tematica, quota) {
        super(titol, autor, tematica);
        this.#quota = quota;
    }

    get quota() { return this.#quota; }

    prestar() {
        if (this.#quota > 0) {
            this.#quota--;
            console.log(`Llibre digital descarregat: ${this.titol}. Quota restant: ${this.#quota}`);
            return true;
        } else {
            console.error(`Error: Quota esgotada per a ${this.titol}`);
            return false;
        }
    }

    retornar() {
        this.#quota++;
        console.log(`Llicència de llibre digital alliberada: ${this.titol}. Quota disponible: ${this.#quota}`);
        return true;
    }
}

module.exports = LlibreDigital;
