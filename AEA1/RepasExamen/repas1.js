/*1. La 6/49
El sorteig més antic de Catalunya és la 6/49 (originàriament Loto 6/49).
Malgrat que avui en dia s'han introduït algunes novetats, les bases clàssiques del sorteig són:
Un usuari ha d'endevinar 6 números entre l'1 i el 49.
La combinació afortunada consta de 6 números. Paral·lelament hi ha un número complementari. Per tant, aquests 7 números (6+1) han de ser diferents i estar compresos entre l'1 i el 49.
Finalment hi ha un altre valor, anomenat reintegrament, que va del 0 a 9.
Crea un script que generi una combinació guanyadora aleatòria i que es presenti en un format semblant a:
La combinació guanyadora de la 6/49 és: 22 26 35 40 41 42
El complementari: 23
El reintegrament: 3*/

//Creacio de l'array guanyador
let combinacio_guanyadora = [];

//Combinacio principal

while(combinacio_guanyadora.length < 6){
    let random = Math.floor(Math.random()*50);
    //Para que usamos esto?.
    let exist = false;

    for(let i = 0; i < combinacio_guanyadora.length; i++){
        if(combinacio_guanyadora[i] === random){
            exist = true;
        }
    }

    if(!exist){
        combinacio_guanyadora.push(random);
    }

    let reintegrament = Math.floor(Math.random()*10);
    let complementari = Math.floor(Math.random()*50);

    console.log("La combinació guanyadora és: " + combinacio_guanyadora);
}