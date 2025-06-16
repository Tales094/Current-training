                                // MENU BURGER-HELP //

const menuHelp = document.getElementById('menu-help');
const help = document.querySelector(".help");
console.log(menuHelp);
console.log(help);

document.addEventListener("DOMContentLoaded", () =>{
    const menuHelp = document.getElementById('menu-help');
    const help = document.querySelector(".help");

    menuHelp.addEventListener("click", () => {
        help.classList.toggle("active")
    })
})
                    // thème "sinistre", "sombre", "macabre" //
// LISTE DES MOTS :
const motMacabre = [
    "ABIME", "ANGOISSE", "DECOMPOSITION", "AUTOPSIE", "BALAFRE","CADAVRE", "MORT", "ENTERREMENT", "ENFER", "CIMETIERE",
    "CORBEAU", "FANTOME", "FUNESTE", "OMBRE", "TENEBRES","SANGLANT", "VAMPIRE", "TOMBEAU", "PENDAISON", "PUTREFACTION"
]
console.log(motMacabre);

const motSinistreSombre = [
    "ASILE", "CERCUEIL", "DEMENCE", "LUGUBRE", "HURLEMENT","MALEDICTION", "POSSESSION", "SUPPLICE", "SARCOPHAGE", "SEPULTURE",
    "TOURMENT", "VOIX", "CAVEAU", "CHAROGNE", "DAMNATION","DESESPOIR", "MARECAGE", "MORBIDE", "REVENANT", "SACRIFICE",
    "VERMINE", "VISCERE", "ZOMBIE", "MEUTRE", "ASSASSIN", "DELUGE","APOCALIPTIQUE", "CATASTROPHES", "HANTE", "ATROCITE"
]
console.log(motSinistreSombre);

// SELECTION D'UN MOT AU HASARD //
let motADeviner = motMacabre[Math.floor(Math.random() * motMacabre.length)]
console.log(motADeviner);

let motADeviner2 = motSinistreSombre[Math.floor(Math.random() * motSinistreSombre.length)]
console.log(motADeviner2);

// AFFICHAGE DES LETTER MASQUEES //
let motMasque = "_".repeat(motADeviner.length);
document.querySelector(".words").textContent = motMasque.split("").join(" ");

let motMasque2 = "_".repeat(motADeviner2.length);
document.querySelector("words").textContent = motMasque2.split("").join(" ")


let lettresDevines = Array(motADeviner.length).fill("_")
let lettresDevines2 = Array(motADeviner2.length).fill("_")

const afficherMot = () => {
    document.getElementById("words-to-find").textContent = lettresDevines.join(" ");
};

const afficherMot2 = () => {
    Document.getElementById("words-to-find").textContent = lettresDevines2.join(" ");
};

afficherMot();
afficherMot2()

// Clavier :
document.querySelectorAll("footer button").forEach(button => {
  button.addEventListener("click", () => {
    let lettre = button.textContent.toUpperCase();
    button.disabled = true;
    verifierLettre(lettre);
  });
});