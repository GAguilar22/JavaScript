// window.onload espera que tota la pàgina estigui carregada
window.onload = function () {

    // Variable descompte
    let descompteAplicat = false;


    // Calculem totes les variables de: subtotal, total, descompte, etc
    function recalcularTotals() {

        let subtotal = 0;

        //"For each"per a tots els elements de .preu-producte visibles
        $('.preu-producte:visible').each(function () {
            subtotal += parseInt($(this).text());
        });

        // Si apliquem el descompte posem 5 sinó 0
        let descompte = 0;
        if (descompteAplicat) {
            descompte = 5;
        }

        //Calculem el total
        let total = subtotal + Math.round(subtotal * 0.05) + 7 - descompte;

        //Actualitzem l'element subtotal buscant el text-muted del primer element de la llista
        $('.list-group-item:first .text-muted').text(subtotal + '€');

        //Actualitzem el total i busquem el <strong> de ".list-group"
        $('.list-group strong').text(total + '€');
    }


    // Amb el .change detectem quan l'usuari modifica el valor dels inputs que siguin de tipus number
    $('input[type="number"]').change(function () {


        //Amb JQuery utilitem $(this) per fer referencia a l'input modificat
        let fila = $(this).closest('.row');

        // Busquem l'element amb classe ".preu-unitari" dins la fila i eliminem el € amb parseINt()
        let preu = parseInt(fila.find('.preu-unitari').text());

        let quantitat = parseInt($(this).val());

        // Actualitzem la columna total de la fila multiplicant preu × quantitat.
        fila.find('.preu-producte').text(preu * quantitat + '€');

        //Tornem a revisar el total i subtotal amb l'anterior funcio
        recalcularTotals();
    });

    // Detectem si l'usuari fa click a la brossa
    $('.btn-outline-danger').click(function () {

        // Pugem fins a la fila sencera del producte
        let fila = $(this).closest('.row');


        //Un cop la fila desapareix amb l'animacio, recalculem els totals i subtotals, per a que tingui en compte que alguna cosa ha desaparegut
        fila.slideUp(function () {

            recalcularTotals();

            // Comptem quantes files ".row.my-3" continuen visibles (tipus de productes)
            // .length retorna el nombre d'elements trobats
            let numProductes = $('.row.my-3:visible').length;

            // Modifiquem el nombre de productes
            $('.badge.bg-info').text(numProductes);

            //Si no hi ha cap producte, bloquejem el boto checkout
            if (numProductes === 0) {
                $('.btn-success').prop('disabled', true);
            }
        });
    });

    // Detectem si l'usuari fa click al boto redeem
    $('.btn-secondary').click(function () {

        //Llegim el codi que ha introduit l'usuari
        let codi = $('input[placeholder="Promo code"]').val();

        //Si el codi es correcte i encara no s'ha aplicat, podem activar el descompte
        if (codi === 'PROMO1000' && !descompteAplicat) {
            descompteAplicat = true;       // Modifiquem la variable de descompte a true
            recalcularTotals();
            $('.no-apply').slideDown();    // Mostrem el descompte amb una animacio


            //Si el codi es incorrecte o ja esta aplicat treiem el descompte
        } else if (codi !== 'PROMO1000' && descompteAplicat) {
            descompteAplicat = false;      // Desactivem el descompte
            recalcularTotals();
            $('.no-apply').slideUp();      // Amaguem la fila de descompte amb lliscat cap amunt
        }
    });


    //L'usuari fa click al boto checkout
    $('.btn-success').click(function () {

        // Llegim el subtotal actual buscant-lo al primer element de la llista
        let subtotal = parseInt($('.list-group-item:first .text-muted').text());

        // Tornem a calcular el descompte per mostrar-lo correctament al modal
        let descompte = 0;
        if (descompteAplicat) {
            descompte = 5;
        }

        // Calculem el total
        let total = subtotal + Math.round(subtotal * 0.05) + 7 - descompte;

        // Preparem el text del descompte per al modal
        let textDescompte = '';
        if (descompteAplicat) {
            textDescompte = '<p>Promo code (PROMO1000): -5€</p>';
        }

        //Insertem els valors al HTML i els mostrem per pantalla
        $('#payment_modal .modal-body').html(`
            <p>Subtotal: ${subtotal}€</p>
            <p>Tax (5%): ${Math.round(subtotal * 0.05)}€</p>
            <p>Shipping: 7€</p>
            ${textDescompte}
            <hr>
            <p><strong>Total: ${total}€</strong></p>
            <p>Prossegueix a la passarel·la de pagament per finalitzar la compra.</p>
        `);

        // .modal('show') és un mètode de Bootstrap que obre el modal amb ID "payment_modal"
        $('#payment_modal').modal('show');
    });

};
