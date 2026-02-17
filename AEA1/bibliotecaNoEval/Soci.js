class Soci {
    #id;
    constructor(nom, id) {
        this.nom = nom;
        this.#id = id;
        this.llistatPrestecs = []; // Array of Prestec objects
    }

    get id() { return this.#id; }

    afegirPrestec(prestec) {
        this.llistatPrestecs.push(prestec);
    }

    // Helper to see active loans
    get prestecsActius() {
        return this.llistatPrestecs.filter(p => p.dataRetorn === null);
    }
}

module.exports = Soci;
