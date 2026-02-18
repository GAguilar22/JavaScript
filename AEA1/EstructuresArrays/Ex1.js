let productes = [
  ["camisa", 19.99, 20],
  ["pantalons", 29.99, 15],
  ["sabates", 49.99, 10],
  ["jaqueta", 99.99, 5]
];

//Afegim un nou producte
productes.push(["motxilla", 39.99, 12]);

//Esborrem un producte
productes.splice(3, 1);

//Filtrar producte amb descompte
let productesAmbDescompte = productes.map(producte => {
  let [nom, preu, quantitat] = producte;
  if (preu > 30) {
    preu *= 0.9; // 10% de descompte
  }
  return [nom, preu, quantitat];
});

console.log("Productes amb descompte:", productesAmbDescompte);

//Filtrar producte amb més de 10 unitats en estoc
let productesEnEstoc = productes.filter(producte => producte[2] > 10);

console.log("Productes amb més de 10 unitats:", productesEnEstoc);

//Calcular el valor total de l'inventari
let valorTotal = productes.reduce((total, producte) => {
  let [nom, preu, quantitat] = producte;
  return total + (preu * quantitat);
}, 0);

console.log("Valor total de l'inventari:", valorTotal.toFixed(2));

