


const p = new Gos("Kimi", 6);
const g = new Gat("Atreus", 3);
const o = new Ocell("Carles", 2);

const animals = [];
animals.push(p, g, o);

for (const animal of animals) {
    animal.presentar();
    animal.ferSo();
}

p.settDieta("carn");
g.settDieta("peix");
o.settDieta("pinso");

for (const animal of animals) {
    console.log(animal.getDieta());
}

// animals.forEach(function (animal) {
//     animal.presentar();
//     animal.ferSo();
// });

// animals.forEach(animal => {
//     animal.presentar();
//     animal.ferSo();
// });