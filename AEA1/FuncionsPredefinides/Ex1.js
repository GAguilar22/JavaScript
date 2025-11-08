
// Demanar a l'usuari que introdueixi tres valors de text
let enter = prompt("Introdueix un número enter");
let decimal = prompt("Introdueix un número decimal");
let operació = prompt("Introdueix una operació matemàtica");


// Convertir el primer valor a nombre enter
let nombreEnter = parseInt(enter);
console.log("Número enter: " + nombreEnter);

// Convertir el segon valor a nombre decimal
let nombreDecimal = parseFloat(decimal);
console.log("Número decimal: " + nombreDecimal);

// Comprovar si els valors són números vàlids
if(isNaN(nombreEnter)){
    alert("El valor introduït per al número enter no és vàlid.");
}else{
    alert("El valor introduït per al número enter és vàlid.");
}

if(isNaN(nombreDecimal)){
    alert("El valor introduït per al número decimal no és vàlid.");
}else{
    alert("El valor introduït per al número decimal és vàlid.");
}

// Executar l'operació matemàtica
let resultatOperació = eval(operació);
console.log("El resultat de l'operació és: " + resultatOperació);