const pilots = [
    ["Verstappen", 100], ["Hamilton", 95], ["Alonso", 98], ["Leclerc", 90], ["Sainz", 88], ["Norris", 85], ["Russell", 82], ["Pérez", 80]
];

function barrejarPilots(array) {
    let llista = [...array];
    for (let i = llista.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = llista[i];
        llista[i] = llista[j];
        llista[j] = temp;
    }
    return llista;
}

function duel(p1, p2) {
    let nom1 = p1[0];
    let combustible1 = p1[1];
    let nom2 = p2[0];
    let combustible2 = p2[1];

    console.log("Duel: " + nom1 + " (" + combustible1.toFixed(1) + ") VS " + nom2 + " (" + combustible2.toFixed(1) + ")");

    let guanyador;
    let fuelRival;

    if (combustible1 >= combustible2) {
        guanyador = [nom1, combustible1];
        fuelRival = combustible2;
        console.log("Guanyador: " + nom1);
    } else {
        guanyador = [nom2, combustible2];
        fuelRival = combustible1;
        console.log("Guanyador: " + nom2);
    }

    let desgast = fuelRival * 0.2;
    guanyador[1] = guanyador[1] - desgast;

    console.log("Nou combustible: " + guanyador[1].toFixed(1) + " Desgast: " + desgast.toFixed(1));

    return guanyador;
}

function emparellaments(pilotsTorneig) {
    let pilotsActuals = pilotsTorneig;
    let rondes = ["QUARTS DE FINAL", "SEMIFINALS", "FINAL"];
    let numRonda = 0;

    console.log("RONDA INICIAL");

    while (pilotsActuals.length > 1) {
        console.log("\n=== " + rondes[numRonda] + " ===");

        pilotsActuals = barrejarPilots(pilotsActuals);

        let seguents = [];

        for (let i = 0; i < pilotsActuals.length; i = i + 2) {
            let p1 = pilotsActuals[i];
            let p2 = pilotsActuals[i + 1];

            console.log(p1[0] + " (" + p1[1].toFixed(1) + ") VS " + p2[0] + " (" + p2[1].toFixed(1) + ")");

            let guanyador = duel(p1, p2);
            seguents.push(guanyador);
        }

        pilotsActuals = seguents;
        numRonda = numRonda + 1;
    }

    let campio = pilotsActuals[0];
    console.log("GUANYADOR: " + campio[0] + campio[1].toFixed(2));
}

emparellaments(pilots);