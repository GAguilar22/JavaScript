class Prestec {
    constructor(titol, tipus, soci, dataInici) {
        this.titol = titol;
        this.tipus = tipus; // 'fisic' or 'digital'
        this.soci = soci;   // Soci name or ID? Object is probably better but circular reference risk. Let's store name or ID. Prompt says 'el soci'. Let's store the object or name. Let's store the name for simplicity in reporting, or the object reference. Let's store the object and handle circular refs if printing. Or just the name/id.
        // Prompt says "informació com el títol, el tipus de llibre, el soci..."
        // Let's store the Soci object for now.
        this.dataInici = dataInici;
        this.dataRetorn = null;
    }

    finalitzarPrestec(data) {
        this.dataRetorn = data;
    }
}

module.exports = Prestec;
