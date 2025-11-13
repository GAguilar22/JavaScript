<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Iker Buded - AEA1 - AA1 - Exercici 2</title>
    <style>
        .multiple5i7 {
            color: green;
        }

        .multiple5 {
            color: red;
            font-size: 120%;
        }

        .multiple7 {
            color: blue;
            font-size: 80%;
        }
    </style>
</head>

<body>
    <?php
    // imprimeixo els numeros de l'1 al 100 tenint en compte els requisits
    for ($i = 1; $i <= 100; $i++) {

        // en cas de que sigui multiple de 5 i 7 
        if ($i % 5 == 0 and $i % 7 == 0) {
            print "<span class='multiple5i7'> $i </span>";
        }
        // en cas de que sigui multiple de 5
        else if ($i % 5 == 0) {
            print "<span class='multiple5'> $i </span>";
        }
        // en cas de que sigui multiple de 7
        else if ($i % 7 == 0) {
            print "<span class='multiple7'> $i </span>";
        }
        // en cas de que sigui normal
        else {
            print "$i ";
        }
        // en cas de que sigui multiple de 10
        if ($i % 10 == 0) {
            print "<br>";
        }
    }

    ?>
</body>

</html>