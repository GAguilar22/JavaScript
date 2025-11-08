//Demana a l’usuari dos números amb prompt() i mostra la suma, resta, multiplicació i divisió per consola.
let readline = require('readline');

// Creem un Scanner (Interficie) per llegir de la consola
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Digues un número: ", (input1) => {
  let num1 = parseFloat(input1);

  rl.question("Digues el segon número: ", (input2) => {
    let num2 = parseFloat(input2);

    let suma = num1 + num2;
    let resta = num1 - num2;
    let mult = num1 * num2;
    let div = num1/num2;

    
    console.log("Suma: " + suma);
    console.log("Resta: " + resta);
    console.log("Multiplicació: " + mult);
    console.log("Divisió: " + div);

    rl.close();
  });
});