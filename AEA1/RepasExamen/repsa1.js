
	let combinacio_guanyadora = [];
	let comptador = 0;
	let reintegrament = Math.floor(Math.random() * 10);
	let complementari = 0;
	
	// Necessito 7 números diferents. Per evitar més iteracions que les propies 7, desaré un valor a l'índex de l'array.
	do {
		let rnd = Math.floor((Math.random() * 49) + 1);
		
		if (combinacio_guanyadora[rnd] === undefined) {
			// Els 6 primers números seran de la combinació normal i el setè serà el complementari
			if (comptador == 6) {
				combinacio_guanyadora[rnd] = "complementari";
			} else {
				combinacio_guanyadora[rnd] = "normal";
			}
			comptador++;
		}
	} while (comptador < 7);
	
	document.write("La combinació guanyadora és: ");
	for (valor in combinacio_guanyadora) {
		if (combinacio_guanyadora[valor] === "normal") {
			document.write(valor + " ");
		} else {
			complementari = valor;
		}
	}
	document.write("<br/>El complementari és: " + complementari);
	document.write("<br/>I el reintegrament: " + reintegrament);
	
	/****************************************************************************************************************/
	
	//Versió clàssica afegint els números a l'array en cas que no hi siguin
	for (let i=0; i<7; i++) {
		let exist = false;
		let rnd;
		do {
			rnd = Math.floor((Math.random() * 49) + 1);
			exist = false;
			for (let x=0; x<combinacio_guanyadora.length; x++) {
				if (combinacio_guanyadora[x] == rnd) {
					exist = true;
				}
			}
		} while(exist);
		combinacio_guanyadora.push(rnd);
	}
	
	document.write("La combinació guanyadora és: ");
	for (let i=0; i<6; i++) {
		document.write(" " + combinacio_guanyadora[i]);
	}
	// En aquesta versió, aconseguir el número complementari és senzillament mirar l'últim de l'array.
	document.write("<br/>El complementari és: " + combinacio_guanyadora[6]);
	document.write("<br/>I el reintegrament: " + reintegrament);

	/****************************************************************************************************************/
	
	// Versió utilitzant un String en comptes d'un Array
	var numbers = '';
	var count = 0;

	document.write("La combinació guanyadora és: ");
	while (count < 7) {
	  let randomNumber = Math.floor(Math.random() * 49) + 1;
	  if (!numbers.includes(randomNumber.toString())) {
	    numbers += randomNumber.toString() + "-";
	    if (count<6) {
	      document.write(randomNumber + " ");
	    } else {
	      document.write("<br/>I el complentari: " + randomNumber);
	    }
	    count++;
	  }
	}

        document.write("<br/>I el reintegrament: " + reintegrament);
	


