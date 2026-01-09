let usuaris = [
    { nom: "Marta", edat: 25, correu: "marta@example.com", aficions: ["lectura", "escalada", "viatjar"] },
    { nom: "Pau", edat: 30, correu: "pau@example.com", aficions: ["cine", "programació", "gimnàs"] },
    { nom: "Anna", edat: 22, correu: "anna@example.com", aficions: ["dibuix", "fotografia", "pintura"] },
        saludar(){
        console.log("Hola el meu nom és: " +  usuari.nom);
    }
];

//Inserim un nou usuari a l'array
usuaris.push({ nom: "Joan", edat: 28, correu: "joan@example.com", aficions: ["viatjar", "ciclisme", "lectura"] });

console.log(usuaris);

//Modificar les aficions d'un usuari
usuaris[1].aficions.pop();
usuaris[1].aficions.push("música");

//Eliminar un usuari
usuaris.splice(2, 1);

console.log(usuaris);

//Filtrar per edat
let usuarisMajorsDe25 = usuaris.filter(usuari => usuari.edat > 25);
console.log(usuarisMajorsDe25);

//Recorrer totes les aficions dels usuaris
//No ho entenc, preguntar-ho
for(let X of usuaris){
    console.log(`Aficions de ${X.nom}:`);
    for(let aficio of X.aficions){
        console.log(`- ${aficio}`);
    }
}