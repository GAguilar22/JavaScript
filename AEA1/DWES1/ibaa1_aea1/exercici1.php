<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Iker Buded - AEA1 - AA1 - Exercici 1</title>
</head>

<body>
    <h1>Adivina la película de la saga Fast & Furious</h1>
    <?php
    // creem l'array de la saga
    $saga_fastAndFourious = array();

    // generem 10 pelicules per generar diferents dades a l'array sense escriure-ho les 10 vegades a mà
    for ($i = 0; $i < 10; $i++) {
        $saga_fastAndFourious[$i] = "Fast & Furious " . $i + 1;
    }

    // fem un random per saber quina pelicula mostrar aleatoriament
    $peliculaescollida = rand(1, 10);

    // mostrem a l'usuari quina ha sigut la pelicula escollita aleatoriament
    print "<h3>" . $saga_fastAndFourious[$peliculaescollida - 1] . "</h3>";



    ?>
</body>

</html>