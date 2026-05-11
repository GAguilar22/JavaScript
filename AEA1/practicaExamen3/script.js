window.addEventListener("load", init);

function init() {
    document.getElementById("btnDOM").addEventListener("click", eliminarTitol);
    document.getElementById("btnLib").addEventListener("click", desordenarTitol);
    document.getElementById("btnEvents").addEventListener("click", canviarEstilTitol);
    document.getElementById("btnRegex").addEventListener("click", validarCamps);
}

// DOM → eliminar títol
function eliminarTitol() {
    let titol = document.getElementById("titol");
    if (titol) {
        titol.remove();
    }
}

// Llibreries → desordenar lletres
function desordenarTitol() {
    let titol = document.getElementById("titol");

    if (titol) {
        let text = titol.textContent.split("");

        // barrejar array
        for (let i = text.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            let temp = text[i];
            text[i] = text[j];
            text[j] = temp;
        }

        titol.textContent = text.join("");
    }
}

// Esdeveniments → canviar estil
function canviarEstilTitol() {
    let titol = document.getElementById("titol");

    if (titol) {
        titol.style.color = "red";
        titol.style.fontSize = "40px";
    }
}

// Regex → validar camps
function validarCamps() {
    let camp1 = document.getElementById("camp1").value;
    let camp2 = document.getElementById("camp2").value;

    let regexText = /^[A-Za-zÀ-ÿ\s]{3,}$/; // mínim 3 lletres

    let valid1 = regexText.test(camp1);
    let valid2 = regexText.test(camp2);

    if (valid1 && valid2) {
        alert("Camps correctes ✅");
    } else {
        alert("Alguns camps NO són correctes ❌");
    }
}