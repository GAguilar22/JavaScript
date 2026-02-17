const Prestec = require('./Prestec');

class Biblioteca {
    constructor() {
        this.llibres = [];
        this.socis = [];
        this.prestecs = []; // Central registry for statistics
    }

    afegirLlibre(llibre) {
        this.llibres.push(llibre);
    }

    afegirSoci(soci) {
        this.socis.push(soci);
    }

    filtrarPerAutor(autor) {
        return this.llibres.filter(l => l.autor.toLowerCase().includes(autor.toLowerCase()));
    }

    prestarLlibre(titolLlibre, idSoci, dataInici) {
        const llibre = this.llibres.find(l => l.titol === titolLlibre);
        const soci = this.socis.find(s => s.id === idSoci);

        if (!llibre) {
            console.error(`Error: Llibre "${titolLlibre}" no trobat.`);
            return;
        }
        if (!soci) {
            console.error(`Error: Soci amb ID ${idSoci} no trobat.`);
            return;
        }

        // Try to lend the book (this triggers polimorphism)
        if (llibre.prestar()) {
            const tipus = llibre.constructor.name === 'LlibreFisic' ? 'Físic' : 'Digital';
            const prestec = new Prestec(titolLlibre, tipus, soci, dataInici);

            soci.afegirPrestec(prestec);
            this.prestecs.push(prestec);
            console.log(`Préstec registrat: ${soci.nom} ha agafat "${titolLlibre}" (${tipus}).`);
        }
    }

    retornarLlibre(titolLlibre, idSoci, dataRetorn) {
        const llibre = this.llibres.find(l => l.titol === titolLlibre);
        const soci = this.socis.find(s => s.id === idSoci);

        if (!llibre || !soci) {
            console.error("Error: Llibre o Soci no trobat.");
            return;
        }

        // Find the active loan for this user and book
        const prestec = soci.llistatPrestecs.find(p => p.titol === titolLlibre && p.dataRetorn === null);

        if (prestec) {
            llibre.retornar(); // Polymorphic return
            prestec.finalitzarPrestec(dataRetorn);
            console.log(`Devolució registrada: ${soci.nom} ha tornat "${titolLlibre}".`);
        } else {
            console.error(`Error: No consta cap préstec actiu de "${titolLlibre}" per a ${soci.nom}.`);
        }
    }

    llibresDisponibles() {
        return this.llibres.filter(l => {
            if (l.constructor.name === 'LlibreFisic') {
                return l.exemplars > 0;
            } else {
                return l.quota > 0;
            }
        }).map(l => l.titol);
    }

    rankingAutors() {
        const recompte = this.prestecs.reduce((acc, prestec) => {
            const llibre = this.llibres.find(l => l.titol === prestec.titol);
            if (llibre) {
                const autor = llibre.autor;
                acc[autor] = (acc[autor] || 0) + 1;
            }
            return acc;
        }, {});

        return Object.entries(recompte)
            .sort((a, b) => b[1] - a[1])
            .map(([autor, count]) => `${autor}: ${count} préstecs`);
    }
    generarInforme() {
        console.log("\n=========================");
        console.log("      INFORME FINAL      ");
        console.log("=========================");

        console.log("\n[Llibres disponibles actualment]");
        console.log(this.llibresDisponibles());

        console.log("\n[Rànquing d'autors més sol·licitats]");
        console.log(this.rankingAutors());

        console.log("\n[Préstecs actius per soci]");
        this.socis.forEach(soci => {
            const actius = soci.prestecsActius;
            if (actius.length > 0) {
                console.log(`- Soci: ${soci.nom} (ID: ${soci.id})`);
                actius.forEach(p => console.log(`    * ${p.titol} [${p.tipus}] - Inici: ${p.dataInici}`));
            }
        });
    }
}

module.exports = Biblioteca;
