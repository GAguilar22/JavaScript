// Cuando cargue todo (ya se me olvidaba añadirlo otra vez)

// actualizarTotales() --> Cuando haya que recalcular totales

window.onload = function () {
    // Variable global
    let descuentoAplicado = false;

  // Detectar cambios de cantidad
  // Selecciono todos los input y con ".change" se detecta cualquier cambio de valor
  // Detectará cuando suba o baje o salga del input o presione enter
  $("input").change(function () {
    // Referenciamos al input que tocamos y lo hacemos subir hasta la fila
    // El primer parent sube de input a "class="col-sm-2"
    // El segundo parent subirá a la fila completa del producto
    // "fila" será el contenedor del producto entero para poder buscar dentro de él
    let fila = $(this).parent().parent();

    // Devuelvo el texto de dentro del elemento
    let precio = fila.find(".preu-unitari").text();

    // conversión a integer para quitar "€" y hacer la operación
    precio = parseInt(precio);

    // ".val" devuelvo el valor actual del input
    let cantidad = $(this).val();

    // Multiplicación del precio en concreto por la cantidad que haya añadido el usuario
    let total = precio * cantidad;

    // Reemplazamos el texto que había con el actualizado
    fila.find(".preu-producte").text(total + "€");

    actualizarTotales();

  });

  // Eliminar producto y animación consecuente
  $(".btn-outline-danger").click(function() {

    let fila = $(this).parent().parent();

    // Animació slideUp
    fila.slideUp(300, function () {
    
        fila.remove();
        actualizarTotales(); // Llamamos a la función
        actualizarBadge(); // Actualizamos en función a esto

    });

    
});

    // - MODAL -
    $(".btn-success").click(function () {

        // Recogemos subtotal, total y descuento
        let subtotal = $(".list-group-item:contains('Subtotal') span").text();
        let total = $(".list-group-item:contains('Total') strong").text();
        let descuento = $(".no-apply span").text();

        // insertamos los valores en el html y showeamos
        $("#payment_modal .modal-body").html(`
            <p>Subtotal: ${subtotal}</p>
            <p>Descuento: ${descuento || '0€'}</p>
            <p>Total: ${total}</p>`);

        $("#payment_modal").modal("show");

    });

  // - FUNCION PRINCIPAL - (Calcular subtotales y totales)
  function actualizarTotales() {
    let subtotal = 0;

    // ".each" recorre todos los elementos que contengan lo mencionado
    $(".preu-producte").each(function () {
      // Elemento actual del bucle
      let precio = $(this).text();
      precio = parseInt(precio);

      subtotal = subtotal + precio;

    });

    // Actualizar el html con la info nueva
    // Todos los spans que hay dentro de "list-group-item"
    $(".list-group-item span").first().text(subtotal + "€");
    
    // Calcular el total
        // - Aplicaremos descuento (si hay)
        // - Añadiremos impuestos
        // - Gastos de envío
    let total = subtotal;
    
    //PromoCode si existe
    if (descuentoAplicado == true) {
        total = total - 5;
    }
    
    // Impuestos
    total = total + total * 0.05;
    
    // Gastos envío
    total = total + 7;

    // Con ":contains" buscamos el bloque que queramos encontrar (total)
    $(".list-group-item:contains('Total') strong").text(parseInt(total) + "€");

    }

    // - FUNCIÓN BAGDE -
    function actualizarBadge(){

        // Num de elementos
        let num = $(".row.my-3").length;

        $(".badge").text(num);

        // Desactivamos el botón de checkout
        if(num == 0){
            $(".btn-success").prop("disabled", true);
        }

    } 

    // - FUNCIÓN PROMOCODODE - 
    $(".btn-secondary").click(function () {

        // Desglose ...
            // Referenciamos el redeem
            // Sube hasta el contenedor del input con parent.parent
            // ".find" lee lo escrito
        let codigo = $(this).parent().parent().find("input").val();

        // Aplicar descuento si:
        if (codigo === "PROMO1000" && !descuentoAplicado){
            descuentoAplicado = true;
            // lo mostramos al usuario
            $(".no-apply").slideDown();
            actualizarTotales();
        } 
        // Código no encaja después de aplicar descuento
        else if (descuentoAplicado && codigo !== "PROMO1000"){
            descuentoAplicado = false;
            // Lo escondemos
            $(".no-apply").slideUp();
            actualizarTotales();
        }

    });


};
