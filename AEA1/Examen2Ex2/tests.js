const assert = require('assert');

// Importa les classes a testejar
const { Vehicle, Cotxe, Moto, Camio } = require('./poo');

// Tests per la classe Vehicle
function testVehicle() {
    const vehicle = new Vehicle();
    vehicle.marca = 'Seat';
    vehicle.model = 'Ibiza';
    vehicle.anyFabricacio = 2001;
    assert.strictEqual(vehicle.marca, 'Seat');
    assert.strictEqual(vehicle.model, 'Ibiza');
    assert.strictEqual(vehicle.anyFabricacio, 2001);
}

// Tests per la classe Cotxe
function testCotxe() {
    const cotxe = new Cotxe();
    cotxe.marca = 'Audi';
    cotxe.model = 'A4';
    cotxe.anyFabricacio = 2005;
    cotxe.numPortes = 5;
    assert.strictEqual(cotxe.marca, 'Audi');
    assert.strictEqual(cotxe.model, 'A4');
    assert.strictEqual(cotxe.anyFabricacio, 2005);
    assert.strictEqual(cotxe.numPortes, 5);
    assert.strictEqual(cotxe instanceof Vehicle, true);
}

// Tests per la classe Moto
function testMoto() {
    const moto = new Moto();
    moto.marca = 'Yamaha';
    moto.model = 'R1';
    moto.anyFabricacio = 2010;
    moto.cilindrada = 1000;
    assert.strictEqual(moto.marca, 'Yamaha');
    assert.strictEqual(moto.model, 'R1');
    assert.strictEqual(moto.anyFabricacio, 2010);
    assert.strictEqual(moto.cilindrada, 1000);
    assert.strictEqual(moto instanceof Vehicle, true);
}

// Tests per la classe Camio
function testCamio() {
    const camio = new Camio();
    camio.marca = 'Iveco';
    camio.model = 'Stralis';
    camio.anyFabricacio = 2008;
    camio.capacitatCarga = 1000;
    assert.strictEqual(camio.marca, 'Iveco');
    assert.strictEqual(camio.model, 'Stralis');
    assert.strictEqual(camio.anyFabricacio, 2008);
    assert.strictEqual(camio.capacitatCarga, 1000);
    assert.strictEqual(camio instanceof Vehicle, true);
}



// Funció per executar els tests
function runTests() {
    testVehicle();
    testCotxe();
    testMoto();
    testCamio();
    console.log(`Tots els test s'han executat amb èxit!`);
}

// Executa els tests
runTests();
