//Contar la vocal "a" en una paraula escrita per l'usuari
// let paraula = prompt("Escriu una paraula per a contar les 'a':");

// let numAs = paraula.split("").filter(lletra => lletra === "a").length;

// console.log(numAs);        // ["a", "a", "a", "a"]
// console.log(`La paraula '${paraula}' té ${numAs} vocals 'a'.`);

/* Comptar totes les vocals d'una paraula donada
let paraula = "allargada";
let comptador = 0;
let vocals = "aeiou";

for (let lletra of paraula) {
    if (vocals.includes(lletra)) {
        comptador++;
    }
}

console.log(`La paraula '${paraula}' té ${comptador} vocals en total.`);
*/

//contar la vocal "a" en una frase escrita per l'usuari
let frase = prompt("Escriu una frase per a contar les 'a':");

let num = frase.split("").filter(lletra => lletra.toLowerCase() === "a").length;

console.log(`La frase '${frase}' té ${num} vocals 'a'.`);