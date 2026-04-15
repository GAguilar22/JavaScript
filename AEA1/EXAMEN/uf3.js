/*
<body>
    <h1>EXAMEN DE DAW M6 UF3</h1>
    <label for="camp1">Camp 1:</label>
    <input type="text" name="camp1" id="camp1">
    <label for="camp2">Camp 2:</label>
    <select name="camp2" id="camp2"></select>
    <button>Esdeveniments</button>
    <button>Expressions regulars</button>
    <button>DOM</button>
    <button>Emmagatzematge</button>
    <button>Llibreries</button>
</body> */

document.addEventListener('DOMContentLoaded', function () {
    /* Exercici 1 */
    document.getElementById("camp1").value = "Sergio Reyes";

    /* Exercici 2 */
    document.addEventListener("mousedown", (event) => {
        if (event.button === 1 && event.target.textContent === "Esdeveniments") {
            alert("Hola!");
        }
    });

    /* Exercici 3 */
    const camp2 = document.querySelector("#camp2");
    const elements = ["Zeus", "Hades", "Apolo", "Kratos"];
    elements.forEach(element => {
        const option = document.createElement("option");
        option.textContent = element;
        camp2.appendChild(option);
    });
    // No aconsegueixo fer que l'usuari hagi d'afegir els '/'
    document.querySelector("button:nth-of-type(2)").addEventListener("click", () => {
        const input = document.querySelector("#camp1");
        const pattern = input.value;
        const selected = camp2.selectedOptions[0].textContent;
        const regex = new RegExp(pattern);
        const result = regex.test(selected);
        if (result) {
            alert("Es compleix el patró.");
        } else {
            alert("No es compleix el patró.");
        }
    });

    /* Exercici 4 */
    document.querySelector("button:nth-of-type(3)").addEventListener("click", () => {
        const title = document.querySelector("h1");
        const titleText = title.textContent;
        const words = titleText.split(" ");
        const shuffledWords = shuffle(words);
        title.textContent = shuffledWords.join(" ");
    });

    function shuffle(array) {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    }

    /* Exercici 5 */
    document.querySelector("button:nth-of-type(4)").addEventListener("click", () => {
        const value = document.querySelector("#camp1").value;
        localStorage.setItem("camp1", value);
        const values = Object.keys(localStorage).map(key => localStorage.getItem(key));
        if (values.length > 0) {
            alert(values.join("\n"));
        } else {
            alert("No hi ha cap valor escrit.");
        }
    });

    /* Exercici 6 */
    $("button:nth-of-type(5)").click(function () {
        $("h1").fadeToggle("slow");
    });

});