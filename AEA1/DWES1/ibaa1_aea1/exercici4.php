<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Iker Buded - AEA1 - AA1 - Exercici 4</title>
</head>

<body>
    <h1>Calculadora segments de l'hora</h1>
    <?php
    // simulació valor de l'hora insterada per l'usuari 
    $horaUsr = "23:59:25";
    // divideixo l'hora a l'array horaDividida
    $horaDividida = explode(":", $horaUsr);
    //comprovo que l'usuari hagi posat numero i no lletres
    $beEscrit = true;
    for ($i = 0; $i < 3; $i++) {
        $numeric = is_numeric($horaDividida[$i]);
        if ($numeric == 0) {
            $beEscrit = false;
        }
    }

    // comprovo que l'usuari hagi posat hores correctes
    if ($beEscrit) {
        if ($horaDividida[0] < 00 and $horaDividida[0] > 23) {
            $beEscrit = false;
        }
        if ($horaDividida[1] < 00 and $horaDividida[1] > 59) {
            $beEscrit = false;
        }
        if ($horaDividida[2] < 00 and $horaDividida[2] > 59) {
            $beEscrit = false;
        }
    }

    if ($beEscrit) {
        //subdibideixo per a comprobar numero per numero cuants segments hi ha
        $horesDividides = str_split($horaDividida[0]);
        $minutsDividits = str_split($horaDividida[1]);
        $segonsDividits = str_split($horaDividida[2]);

        $contadorSegments = 0;
        for ($j = 0; $j < 2; $j++) {
            // per comprobar els segments de l'hora
            switch ($horesDividides[$j]) {
                case 1:
                    $contadorSegments += 2;
                    break;
                case 7:
                    $contadorSegments += 3;
                    break;
                case 4:
                    $contadorSegments += 4;
                    break;
                case 2:
                case 3:
                case 5:
                    $contadorSegments += 5;
                    break;
                case 0:
                case 6:
                case 9:
                    $contadorSegments += 6;
                    break;
                case 8:
                    $contadorSegments += 7;
                    break;
            }

            // per comprobar els segments dels minuts
            switch ($minutsDividits[$j]) {
                case 1:
                    $contadorSegments += 2;
                    break;
                case 7:
                    $contadorSegments += 3;
                    break;
                case 4:
                    $contadorSegments += 4;
                    break;
                case 2:
                case 3:
                case 5:
                    $contadorSegments += 5;
                    break;
                case 0:
                case 6:
                case 9:
                    $contadorSegments += 6;
                    break;
                case 8:
                    $contadorSegments += 7;
                    break;
            }

            // per comprobar els segments dels minuts
            switch ($segonsDividits[$j]) {
                case 1:
                    $contadorSegments += 2;
                    break;
                case 7:
                    $contadorSegments += 3;
                    break;
                case 4:
                    $contadorSegments += 4;
                    break;
                case 2:
                case 3:
                case 5:
                    $contadorSegments += 5;
                    break;
                case 0:
                case 6:
                case 9:
                    $contadorSegments += 6;
                    break;
                case 8:
                    $contadorSegments += 7;
                    break;
            }
        }
        // imprimim per pantalla els segments de l'hora introduida
        print "<p>L'hora introduïda ( $horaUsr ) té $contadorSegments segments</p>";
    }


    ?>
</body>

</html>