const equips = ["Totthenham", "Manchester City", "Ajax", "Juventus",
    "Liverpool", "Porto", "Manchester United", "F.C. Barcelona"];

console.log("Equips participants:", equips);

// Funció que barreja l'array d'equips aleatòriament utilitzant Math.random() per assegurar emparellaments diferents en cada execució.
function barrejarEquips(equipsPerBarrejar) {
    // Math.random() retorna entre 0 i 1. Restant 0.5 obtenim un valor entre -0.5 i 0.5.
    // Si és negatiu, ordena A abans que B. Si és positiu, B abans que A. Això "barreja" l'array.
    return equipsPerBarrejar.sort(() => Math.random() - 0.5);
}

// Funció que rep els equips i la ronda, els barreja si cal, i genera els objectes d'emparellament (local vs visitant) per a cada partit.
function generarEmparellaments(equips, ronda) {
    // console.log(`\n--- ${ronda} ---`);
    console.log("\n--- " + ronda + " ---\n");
    if (ronda === "QUARTS DE FINAL") barrejarEquips(equips);
    if (ronda === "SEMIFINALS") barrejarEquips(equips);

    let partits = [];

    // Incrementem de 2 en 2 (i += 2) per agafar parelles úniques (0 i 1, 2 i 3...) i evitar que un equip jugui contra si mateix o es repeteixi.
    for (let i = 0; i < equips.length; i += 2) {
        let local = equips[i];
        let visitant = equips[i + 1];
        // console.log(`Partit ${partits.length + 1}: ${local} vs ${visitant}`);
        console.log("Partit " + (partits.length + 1) + ": " + local + " vs " + visitant + "\n");

        partits.push({
            local: local,
            visitant: visitant
        });
    }
    return partits;
}

// Funció auxiliar que genera un número enter aleatori entre 0 i 10 per simular els gols marcats per un equip.
function generarGols() {
    return Math.floor(Math.random() * 11);
}

// Funció principal que simula l'anada i tornada, calcula el total de gols, aplica la regla del valor doble dels gols fora de casa en cas d'empat, i decideix qui passa de ronda (o penals si persisteix l'empat).
function jugarEliminatoria(partits, ronda) {
    // console.log(`\n--- RESULTATS ${ronda} ---`);
    console.log("\n--- RESULTATS " + ronda + " ---\n");
    let classificats = [];

    partits.forEach((partit, index) => {
        // Anada
        partit.golsLocalAnada = generarGols();
        partit.golsVisitantAnada = generarGols();
        // console.log(`Partit ${index + 1} (Anada): ${partit.local} ${partit.golsLocalAnada} - ${partit.golsVisitantAnada} ${partit.visitant}`);
        console.log("Partit " + (index + 1) + " (Anada): " + partit.local + " " + partit.golsLocalAnada + " - " + partit.golsVisitantAnada + " " + partit.visitant + "\n");

        // Tornada
        partit.golsLocalTornada = generarGols();
        partit.golsVisitantTornada = generarGols();
        // console.log(`Partit ${index + 1} (Tornada): ${partit.visitant} ${partit.golsLocalTornada} - ${partit.golsVisitantTornada} ${partit.local}`);
        console.log("Partit " + (index + 1) + " (Tornada): " + partit.visitant + " " + partit.golsLocalTornada + " - " + partit.golsVisitantTornada + " " + partit.local + "\n");

        // Càlcul de totals
        let totalGolsLocal = partit.golsLocalAnada + partit.golsVisitantTornada;
        let totalGolsVisitant = partit.golsVisitantAnada + partit.golsLocalTornada;

        let guanyador = "";

        if (totalGolsLocal > totalGolsVisitant) {
            guanyador = partit.local;
            // console.log(`   -> Passa: ${guanyador} (Global: ${totalGolsLocal}-${totalGolsVisitant})`);
            console.log("   -> Passa: " + guanyador + " (Global: " + totalGolsLocal + "-" + totalGolsVisitant + ")\n");
        } else if (totalGolsVisitant > totalGolsLocal) {
            guanyador = partit.visitant;
            console.log("   -> Passa: " + guanyador + " (Global: " + totalGolsLocal + "-" + totalGolsVisitant + ")\n");
        } else {
            // Empat
            if (partit.golsVisitantAnada > partit.golsVisitantTornada) {
                guanyador = partit.visitant;
                // console.log(`   -> Empat global (${totalGolsLocal}-${totalGolsVisitant}). Passa ${guanyador} per valor doble de gols fora.`);
                console.log("   -> Empat global (" + totalGolsLocal + "-" + totalGolsVisitant + "). Passa " + guanyador + " per valor doble de gols fora.\n");
            } else if (partit.golsVisitantTornada > partit.golsVisitantAnada) {
                guanyador = partit.local;
                // console.log(`   -> Empat global (${totalGolsLocal}-${totalGolsVisitant}). Passa ${guanyador} per valor doble de gols fora.`);
                console.log("   -> Empat global (" + totalGolsLocal + "-" + totalGolsVisitant + "). Passa " + guanyador + " per valor doble de gols fora.\n");
            } else {
                if (Math.random() > 0.5) {
                    guanyador = partit.local;
                } else {
                    guanyador = partit.visitant;
                }
                // console.log(`   -> Empat TOTAL (${totalGolsLocal}-${totalGolsVisitant}). Passa ${guanyador} per penals (aleatori).`);
                console.log("   -> Empat TOTAL (" + totalGolsLocal + "-" + totalGolsVisitant + "). Passa " + guanyador + " per penals (aleatori).\n");
            }
        }
        classificats.push(guanyador);
    });

    return classificats;
}

// Funció exclusiva per a la final que juga un únic partit. En cas d'empat, decideix el guanyador directament per penals (aleatori 50/50).
function jugarFinal(equips) {
    console.log("\n--- FINAL ---");
    let local = equips[0];
    let visitant = equips[1];

    // console.log(`Partit Final: ${local} vs ${visitant}`);
    console.log("Partit Final: " + local + " vs " + visitant + "\n");

    let golsLocal = generarGols();
    let golsVisitant = generarGols();

    // console.log(`Resultat: ${local} ${golsLocal} - ${golsVisitant} ${visitant}`);
    console.log("Resultat: " + local + " " + golsLocal + " - " + golsVisitant + " " + visitant + "\n");

    if (golsLocal > golsVisitant) {
        // console.log(`\n🏆 CAMPIÓ: ${local}!!! 🏆`);
        console.log("\n🏆 CAMPIÓ: " + local + "!!! 🏆\n");
    } else if (golsVisitant > golsLocal) {
        // console.log(`\n🏆 CAMPIÓ: ${visitant}!!! 🏆`);
        console.log("\n🏆 CAMPIÓ: " + visitant + "!!! 🏆\n");
    } else {
        // Empat -> Penals
        let guanyador = "";
        if (Math.random() > 0.5) {
            guanyador = local;
        } else {
            guanyador = visitant;
        }
        console.log("Resultat: EMPAT. Es decideix per penals...\n");
        // console.log(`\n🏆 CAMPIÓ: ${guanyador}!!! (per penals) 🏆`);
        console.log("\n🏆 CAMPIÓ: " + guanyador + "!!! (per penals) 🏆\n");
    }
}

// Execució
var quartsFinal = generarEmparellaments(equips, "QUARTS DE FINAL");
var semifinalistes = jugarEliminatoria(quartsFinal, "QUARTS DE FINAL");

console.log("\nEquips classificats per a Semifinals:", semifinalistes);

// Semifinals
var semis = generarEmparellaments(semifinalistes, "SEMIFINALS");
var finalistes = jugarEliminatoria(semis, "SEMIFINALS");

console.log("\nEquips classificats per a la Final:", finalistes);

// Final
jugarFinal(finalistes);
