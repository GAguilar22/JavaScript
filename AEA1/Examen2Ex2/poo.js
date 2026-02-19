class Vehicle {
    #marca;
    #model;
    #anyFabricacio;

    constructor(marca, model, anyFabricacio) {
        this.#marca = marca;
        this.#model = model;
        this.#anyFabricacio = anyFabricacio;
    }

    // Getters and Setters
    get marca() {
        return this.#marca;
    }

    set marca(marca) {
        this.#marca = marca;
    }

    get model() {
        return this.#model;
    }

    set model(model) {
        this.#model = model;
    }

    get anyFabricacio() {
        return this.#anyFabricacio;
    }

    set anyFabricacio(any) {
        this.#anyFabricacio = any;
    }


    #calcularAntiguitat() {
        let antiguitat;
        anyActual = 2026;
        antiguitat = anyActual - this.#anyFabricacio;
        return antiguitat;
    }

    mostrarInfo() {
        console.log('Marca: ' + this.#marca + ' Model: ' + this.#model + ' Antiguitat del vehicle: ' + antiguitat);
    }

}

class Cotxe extends Vehicle {
    #nombrePortes;

    constructor(marca, model, anyFabricacio, nombrePortes) {
        super(marca, model, anyFabricacio);
        this.#nombrePortes = nombrePortes;
    }

    get nombrePortes() {
        return this.#nombrePortes;
    }

    set nombrePortes(numPortes) {
        this.#nombrePortes = numPortes;
    }

    mostrarInfo() {
        const anyActual = 2026;
        let antiguitat = anyActual - this.anyFabricacio;
        console.log('Marca: ' + this.marca + ', Model: ' + this.model + ', Antiguitat: ' + antiguitat + ', Numero de portes: ' + this.#nombrePortes)
    }

}

class Moto extends Vehicle {
    #cilindrada;

    constructor(marca, model, anyFabricacio, cilindrada) {
        super(marca, model, anyFabricacio);
        this.#cilindrada = cilindrada
    }

    get cilindrada() {
        return this.#cilindrada;
    }

    set cilindrada(cilindrada) {
        this.#cilindrada = cilindrada;
    }

    mostratInfo() {
        const anyActual = 2026;
        let antiguitat = anyActual - this.anyFabricacio;
        console.log('Marca: ' + this.marca + ', Model: ' + this.model + ', Antiguitat: ' + antiguitat + ', Cilindrada: ' + this.#cilindrada)
    }
}

class Camio extends Vehicle {
    #capacitatCarrega;

    constructor(marca, model, anyFabricacio, capacitatCarrega) {
        super(marca, model, anyFabricacio);
        this.#capacitatCarrega = capacitatCarrega;
    }

    get capacitatCarrega() {
        return this.capacitatCarrega;
    }

    set capacitatCarrega(capacitat) {
        this.#capacitatCarrega = capacitat;
    }

    mostratInfo() {
        const anyActual = 2026;
        let antiguitat = anyActual - this.anyFabricacio;
        console.log('Marca: ' + this.marca + ', Model: ' + this.model + ', Antiguitat: ' + antiguitat + ', Capacitat de càrrega (en tones): ' + this.#capacitatCarrega)
    }
}


// No canviïs aquesta línia de codi. Serveix perquè les funcions d'aquest fitxer es puguin usar en el fitxer de tests.
module.exports = { Vehicle, Cotxe, Moto, Camio };