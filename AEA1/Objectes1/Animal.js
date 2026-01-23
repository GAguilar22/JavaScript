class Animal {
    #dieta;
    constructor(nom, edat) {
        this.nom = nom;
        this.edat = edat;

    }

    presentar() {
        console.log("Sóc un animal anomenat " + this.nom + " i tinc " + this.edat + " anys.")
    }

    setDieta(dieta) {
        this.#dieta = dieta;
    }

    getDieta() {
        return this.#dieta;
    }

}

module.exports = Animal;