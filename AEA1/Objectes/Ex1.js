let usuari = {
    nom: "Gerard",
    edat: 29,
    correu: "gerard@example.com",
    aficions: ["conduir", "videojocs", "cuina"],
    saludar(){
        console.log("Hola el meu nom és: " +  usuari.nom);
    }
}

console.log(usuari.edat);

usuari.edat++

console.log(usuari.edat);

usuari.aficions.push("basquet");

for (let i = 0; i < usuari.aficions.length; i++) {
    console.log(usuari.aficions[i])
}

delete usuari.correu;
console.log(usuari)

console.log(usuari.nom)
console.log(usuari["edat"])
console.log(usuari.aficions)

for (let aficio in usuari){
    console.log(aficio + " : " + usuari[aficio])
}

usuari.saludar();