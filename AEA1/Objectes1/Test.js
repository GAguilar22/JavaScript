
const Gos = require('./Gos');
const Gat = require('./Gat');
const Ocell = require('./Ocell');

const p = new Gos("Kimi", 6);
const g = new Gat("Atreus", 3);
const o = new Ocell("Fenix", 2);

const animals = [];
animals.push(p, g, o);


animals.forEach(animal => {
    animal.presentar();
    animal.ferSo();
});

p.setDieta("carn");
g.setDieta("peix");
o.setDieta("cucs");

animals.forEach(animal => {
    console.log(animal.getDieta());
});
