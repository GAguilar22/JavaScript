/*Escriu un programa que, demani al usuari donada una nota (0-10), mostri:
"Suspès" si < 5
"Aprovat" si >= 5 i < 7
"Notable" si >= 7 i < 9
"Excel·lent" si >= 9 */


let nota = parseInt(prompt("Introdueix la nota (0-10)"));

    if (nota < 5){
        console.log("Suspès");
    }else if(nota >= 5 && nota <7){
        console.log("Aprovat");
    }else if(nota >= 7 && nota <9){
        console.log("Notable");
    }else{
        console.log("Excel·lent");
    }
