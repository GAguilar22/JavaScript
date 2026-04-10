// window.onload espera que tota la pàgina (HTML + imatges + scripts) estigui carregada
// abans d'executar el codi de dins. Així ens assegurem que tots els elements del DOM existeixen.
window.onload = function () {

    // Variable que controla si el codi promocional ja s'ha aplicat.
    // La declarem aquí fora perquè totes les funcions de dins puguin accedir-hi i modificar-la.
    let descompteAplicat = false;

    // ── FUNCIÓ: recalcularTotals ─────────────────────────────────────────────
    // Recalcula el subtotal i el total del carret i actualitza el DOM.
    // La cridem cada vegada que canvia alguna cosa: quantitat, eliminació o codi promo.
    function recalcularTotals() {

        // Inicialitzem el subtotal a 0 per acumular-hi els preus de cada producte
        let subtotal = 0;

        // .each() recorre tots els elements amb classe ".preu-producte" que siguin visibles
        // (els articles eliminats queden ocults amb slideUp i no s'han de sumar)
        // Per cada element, llegim el seu text, el convertim a número amb parseInt() i el sumem
        $('.preu-producte:visible').each(function () {
            subtotal += parseInt($(this).text());
        });

        // Operador ternari: si el descompte està aplicat posem 5, sinó 0
        // És equivalent a un if/else però en una sola línia
        let descompte = descompteAplicat ? 5 : 0;

        // Càlcul del total: subtotal + impost (5% arrodonit) + enviament (7€) - descompte
        // Math.round() arrodoneix el resultat dels impostos al enter més proper
        let total = subtotal + Math.round(subtotal * 0.05) + 7 - descompte;

        // Actualitzem el subtotal al DOM: busquem l'element que conté "Subtotal",
        // pugem al seu pare i busquem el germà amb classe ".text-muted"
        $('h6:contains("Subtotal")').parent().siblings('.text-muted').text(subtotal + '€');

        // Actualitzem el total al DOM: busquem el <strong> dins de ".list-group"
        $('.list-group strong').text(total + '€');
    }


    // ── BLOC 1: Modificar quantitat ──────────────────────────────────────────
    // .change() detecta quan l'usuari canvia el valor de qualsevol input
    // (pujant/baixant fletxes, escrivint i prement Enter, o sortint del camp)
    $('input').change(function () {

        // $(this) fa referència a l'input que l'usuari ha modificat.
        // .closest('.row') puja per l'arbre del DOM fins a trobar el div.row
        // que conté tota la fila del producte. És més segur que .parent().parent()
        // perquè funciona independentment de quants nivells hi hagi entremig.
        let fila = $(this).closest('.row');

        // Busquem l'element amb classe ".preu-unitari" dins de la fila i llegim el seu text.
        // parseInt() elimina el símbol "€" i converteix el text a número enter.
        let preu = parseInt(fila.find('.preu-unitari').text());

        // .val() retorna el valor actual de l'input. parseInt() el converteix a número.
        let quantitat = parseInt($(this).val());

        // Actualitzem la columna "Total" de la fila multiplicant preu × quantitat.
        // Unim el resultat amb '€' per mostrar-lo correctament al DOM.
        fila.find('.preu-producte').text(preu * quantitat + '€');

        // Cridem la funció per recalcular el subtotal i total del carret
        recalcularTotals();
    });

    // ── BLOC 2: Eliminar article ─────────────────────────────────────────────
    // .click() detecta quan l'usuari prem el botó de la paperera
    $('.btn-outline-danger').click(function () {

        // Pugem fins a la fila sencera del producte
        let fila = $(this).closest('.row');

        // slideUp() amaga la fila amb una animació de lliscat cap amunt.
        // El segon argument és un callback: una funció que s'executa QUAN acaba l'animació.
        // Posem el codi aquí dins per assegurar-nos que els càlculs es fan
        // després que la fila ja estigui oculta (i per tant no compti en els totals).
        fila.slideUp(function () {

            // Recalculem subtotal i total sense la fila eliminada
            recalcularTotals();

            // Comptem quantes files ".row.my-3" continuen visibles (tipus de productes)
            // .length retorna el nombre d'elements trobats
            let numProductes = $('.row.my-3:visible').length;

            // Actualitzem el badge blau amb el nou nombre de productes
            $('.badge.bg-info').text(numProductes);

            // Si no queda cap producte, deshabilitem el botó "Checkout"
            // .prop('disabled', true) afegeix l'atribut disabled al botó
            if (numProductes === 0) {
                $('.btn-success').prop('disabled', true);
            }
        });
    });

    // ── BLOC 3: Codi promocional ─────────────────────────────────────────────
    // .click() detecta quan l'usuari prem el botó "Redeem"
    $('.btn-secondary').click(function () {

        // .val() llegeix el text que l'usuari ha escrit a l'input del codi promo
        // El selector busca l'input pel seu atribut placeholder
        let codi = $('input[placeholder="Promo code"]').val();

        // Primera condició: el codi és correcte I el descompte encara no s'ha aplicat.
        // !descompteAplicat és equivalent a descompteAplicat === false
        if (codi === 'PROMO1000' && !descompteAplicat) {
            descompteAplicat = true;       // Marquem el descompte com a aplicat
            recalcularTotals();            // Recalculem amb el descompte activat
            $('.no-apply').slideDown();    // Mostrem la fila de descompte amb lliscat cap avall

        // Segona condició: el codi es incorrecte I el descompte estava aplicat.
        // En aquest cas traiem el descompte.
        } else if (codi !== 'PROMO1000' && descompteAplicat) {
            descompteAplicat = false;      // Desactivem el descompte
            recalcularTotals();            // Recalculem sense descompte
            $('.no-apply').slideUp();      // Amaguem la fila de descompte amb lliscat cap amunt
        }
        // Si no entra en cap condició (ex: codi incorrecte sense descompte actiu) no fa res
    });

    // ── BLOC 4: Modal de resum (Checkout) ────────────────────────────────────
    // .click() detecta quan l'usuari prem el botó "Checkout"
    $('.btn-success').click(function () {

        // Llegim el subtotal actual del DOM i el convertim a número
        let subtotal = parseInt($('h6:contains("Subtotal")').parent().siblings('.text-muted').text());

        // Tornem a calcular el descompte per mostrar-lo correctament al modal
        let descompte = descompteAplicat ? 5 : 0;

        // Calculem el total igual que a recalcularTotals()
        let total = subtotal + Math.round(subtotal * 0.05) + 7 - descompte;

        // .html() injecta codi HTML directament dins del cos del modal.
        // Usem un template literal (backticks `) per escriure el HTML en múltiples línies
        // i poder inserir variables directament amb ${variable} sense concatenar strings.
        // L'operador ternari dins del template afegeix la línia del promo code
        // només si el descompte està activat, sinó insereix un string buit ''.
        $('#payment_modal .modal-body').html(`
            <p>Subtotal: ${subtotal}€</p>
            <p>Tax (5%): ${Math.round(subtotal * 0.05)}€</p>
            <p>Shipping: 7€</p>
            ${descompteAplicat ? '<p>Promo code (PROMO1000): -5€</p>' : ''}
            <hr>
            <p><strong>Total: ${total}€</strong></p>
            <p>Prossegueix a la passarel·la de pagament per finalitzar la compra.</p>
        `);

        // .modal('show') és un mètode de Bootstrap que obre el modal amb ID "payment_modal"
        $('#payment_modal').modal('show');
    });

};

// ════════════════════════════════════════════════════════════════════════════
// RESUM: PER QUÈ UTILITZEM EL QUE UTILITZEM
// ════════════════════════════════════════════════════════════════════════════
//
// window.onload
//   Garanteix que tot el DOM està carregat abans d'executar el codi.
//   Sense això, els selectors de jQuery no trobarien cap element.
//
// jQuery ($)
//   Llibreria JavaScript ja carregada a l'HTML. Ens permet seleccionar
//   elements del DOM i manipular-los amb menys codi que el JavaScript pur.
//
// .change() / .click()
//   Mètodes jQuery per detectar events de l'usuari sobre elements HTML.
//   Equivalen a .on('change') i .on('click') però escrits de forma més curta.
//
// $(this)
//   Fa referència a l'element HTML que ha disparat l'event (el que l'usuari ha tocat).
//   Dins d'un .click() o .change() sempre apunta a l'element actiu.
//
// .closest('.row')
//   Puja per l'arbre del DOM buscant el primer ancestre que coincideixi amb el selector.
//   Més robust que .parent().parent() perquè no depèn del nombre de nivells.
//
// .find()
//   Busca elements descendents dins d'un contenidor concret.
//   L'usem per localitzar el preu o la quantitat dins de la fila correcta.
//
// .text() / .val()
//   .text() llegeix o escriu el contingut de text d'un element HTML.
//   .val() llegeix o escriu el valor d'un input de formulari.
//
// parseInt()
//   Converteix un string (ex: "25€") a un número enter (25).
//   Necessari per poder fer operacions matemàtiques amb els preus.
//
// .each()
//   Recorre tots els elements que coincideixen amb un selector i executa
//   una funció per cadascun. L'usem per sumar tots els preus del carret.
//
// :visible
//   Filtre jQuery que exclou els elements ocults (display: none).
//   Necessari per no sumar els articles eliminats amb slideUp.
//
// .slideUp() / .slideDown()
//   Efectes d'animació de jQuery: amaguen o mostren elements amb un efecte
//   de lliscat vertical suau. Accepten un callback que s'executa en acabar.
//
// Operador ternari (condició ? valor_si : valor_no)
//   Versió compacta d'un if/else en una sola línia.
//   L'usem per calcular el descompte i per afegir la línia del promo al modal.
//
// Template literals (backticks `)
//   Permeten escriure strings en múltiples línies i inserir variables
//   directament amb ${} sense necessitat de concatenar amb +.
//   Molt útil per generar blocs de HTML de forma llegible.
//
// .prop('disabled', true)
//   Afegeix o treu l'atribut 'disabled' d'un element HTML.
//   L'usem per deshabilitar el botó Checkout quan el carret és buit.
//
// .modal('show')
//   Mètode de Bootstrap per obrir un modal. Necessita que Bootstrap
//   estigui carregat a l'HTML, cosa que ja està feta a l'index.html.
//
// Math.round()
//   Arrodoneix un número decimal a l'enter més proper.
//   L'usem per evitar valors com "1.25€" en el càlcul dels impostos.
