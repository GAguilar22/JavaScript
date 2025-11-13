<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Iker Buded - AEA1 - AA1 - Exercici 3</title>
</head>

<body>
    <h1>Joc Pedra, Paper, Tissora</h1>
    <!-- > Faig el formulari per a que l'usuari pugui escollir la seva jugada</!-->
    <form action="" method="post">
        <p>
            <select id="jugada" name="jugada">
                <option value="Pedra">Pedra</option>
                <option value="Paper">Paper</option>
                <option value="Tissora">Tissora</option>
            </select>

            <input type="submit" name="submit" value="Jugar">
        </p>
    </form>

    <?php
    // Recolleixo les dades si l'usuari prem "Jugar"
    if (isset($_POST["submit"])) {
        // Guardo la jugada de l'usuari
        $jugadaUsuari = $_POST["jugada"];
        // generem aleatoriament quina jugada vol fer l'IA
        $jugades = ["Pedra", "Paper", "Tissora"];
        $jugadaIA = $jugades[rand(0, 2)];

        // imprimim a pantalla les jugades de l'usuari com de l'IA
        print "<p>L'usuari escull $jugadaUsuari</p>";
        print "<p>La IA treu $jugadaIA</p>";

        // comprovem qui guanya o si es un empat
        if ($jugadaUsuari == $jugadaIA) {
            print "<p>Empat</p>";
        } else if ($jugadaUsuari == "Pedra" and $jugadaIA == "Tissora") {
            print "<p>L'usuari guanya</p>";
        } else if ($jugadaUsuari == "Paper" and $jugadaIA == "Pedra") {
            print "<p>L'usuari guanya</p>";
        } else if ($jugadaUsuari == "Tissora" and $jugadaIA == "Paper") {
            print "<p>L'usuari guanya</p>";
        } else if ($jugadaUsuari == "Pedra" and $jugadaIA == "Paper") {
            print "<p>La IA guanya</p>";
        } else if ($jugadaUsuari == "Paper" and $jugadaIA == "Tissora") {
            print "<p>La IA guanya</p>";
        } else if ($jugadaUsuari == "Tissora" and $jugadaIA == "Pedra") {
            print "<p>La IA guanya</p>";
        }
    }
    ?>
</body>

</html>