// A3
const inventari = {
  jocs: [
    { id: 1, titol: "Zelda: Breath of the Wild", plataforma: "Nintendo Switch", estoc: 3 },
    { id: 2, titol: "God of War", plataforma: "PlayStation 4", estoc: 5 }
  ],



  // Escriu aquí el teu codi

  afegirJoc(titol, plataforma, estoc) {
    //Comprovem si el joc ja existeix
    for (let i = 0; i < inventari.jocs.length; i++) {
      let joc = inventari.jocs[i];
      if (joc.titol === titol && joc.plataforma === plataforma) {
        return null;
      }
    }

    //Calcular nou ID
    let idGran = 0;
    for (let i = 0; i < inventari.jocs.length; i++) {
      if (inventari.jocs[i].id > idGran) {
        idGran = inventari.jocs[i].id;
      }
    }

    const nouId = idGran + 1;

    inventari.jocs.push({
      id: nouId,
      titol,
      plataforma,
      estoc
    });

    return nouId;

  },

  actualitzarEstoc(id, nouEstoc) {
    for (let i = 0; i < inventari.jocs.length; i++) {
      if (inventari.jocs[i].id === id) {
        inventari.jocs[i].estoc = nouEstoc;
        return true;
      }
    }

    return false;
  },


  filtrarPerPlataforma(plataforma) {
    const resultats = [];
    for (let i = 0; i < inventari.jocs.length; i++) {
      if (inventari.jocs[i].plataforma === plataforma) {
        resultats.push(inventari.jocs[i]);
      }
    }
    return resultats;
  },

  llistarDisponibles() {
    return inventari.jocs.filter(joc => joc.estoc > 0);
  },

  jocAmbMesEstoc() {
    let estocMax = 0;

    for (let i = 0; i < inventari.jocs.length; i++) {
      if (inventari.jocs[i].estoc > estocMax) {
        estocMax = inventari.jocs[i].estoc;
      }
    }

    const estocFinalMax = [];
    for (let i = 0; i < inventari.jocs.length; i++) {
      if (inventari.jocs[i].estoc === estocMax) {
        estocFinalMax.push(inventari.jocs[i]);
      }
    }

    return estocFinalMax;
  }

};

// No canviïs aquesta línia de codi. Serveix perquè les funcions d'aquest fitxer es puguin usar en el fitxer de tests.
module.exports = { inventari };