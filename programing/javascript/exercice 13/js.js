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
console.log("Mot A Trouver :", motADeviner);

let motADeviner2 = motSinistreSombre[Math.floor(Math.random() * motSinistreSombre.length)]
console.log("Mot A Trouver :", motADeviner2);

// AFFICHAGE DES LETTER MASQUEES //
let motMasque = "_".repeat(motADeviner.length);
document.querySelector(".words").textContent = motMasque.split("").join(" ");

let motMasque2 = "_".repeat(motADeviner2.length);
document.querySelector("#words-to-find").textContent = motMasque2.split("").join(" ")


let lettresDevines = Array(motADeviner.length).fill("_")
let lettresDevines2 = Array(motADeviner2.length).fill("_")

const afficherMot = () => {
    document.getElementById("words-to-find").textContent = lettresDevines.join(" ");
};

const afficherMot2 = () => {
    document.getElementById("words-to-find").textContent = lettresDevines2.join(" ");
};

afficherMot();
afficherMot2()

// Clavier :
let lettre = ""
document.querySelectorAll("footer button").forEach(button => {
  button.addEventListener("click", () => {
    let lettre = button.textContent.toUpperCase();
    button.disabled = true;
    verifierLettre(lettre);
  });
});
// Active ou désactive tous les boutons du clavier virtuel
function activerClavier(actif) {
  document.querySelectorAll("footer button").forEach(btn => {
    btn.disabled = !actif;
    if(actif) btn.classList.remove("disabled");
    else btn.classList.add("disabled");
  });
}


document.addEventListener("keydown", (event) => {
    //recup la touche en MAJ
    let lettre = event.key.toUpperCase();

    //verif lettre a A à Z
    if(lettre.match(/^[A-Z]$/)) {
        //selection le btn correspondant o clavier virtuel
        let button = Array.from(document.querySelectorAll("footer button"))
                          .find(btn => btn.textContent === lettre);
    //Si le bouton existe et n'est pas deja désactive
    if (button && ! button.disabled){
        button.disabled = true;
        verifierLettre(lettre);
        afficherMot();
    }                    
    }
})
//Verifie si la lettre est dans le mot
let erreurs = 0;
const maxErreurs = 6;

function verifierLettre(lettre){
    //ingore si la lettre deja trouvé(ou tester)
    if(lettresDevines.includes(lettre))
        return;
    let lettreTrouver = false;
    for(let i = 0; i < motADeviner.length; i++) {
        if(motADeviner[i] === lettre) {
            lettresDevines[i] = lettre;
            lettreTrouver = true
        }
    }
    if(lettreTrouver){
        afficherMot();
    // Si toutes les lettres sont trouvées, fin de partie victoire
    if(!lettresDevines.includes("_")) {
        finDePartie(true)
    }
    }
    else{
        erreurs++;



        if(erreurs >= maxErreurs){
            finDePartie(false);
        }
    }
}

// fin de parti (victoire-defaite)
function finDePartie(gagne) {
    activerClavier(false);
    if(gagne) {
        // jouerSonVictoire()
        alert(`Joueur ${joueurActuel} a gangné !`);
        if(joueurActuel === 1) score1++;
        else score2++;
    }else
    // jouerSonPerdu()
    alert(`Joueur ${joueurActuel} a perdu ! Le mot était : ${motADeviner}`);   
}
const score1Elem = document.getElementById("score1");
const score2Elem = document.getElementById("score2");
// Mise à jour des scores visibles
//   score1Elem.textContent = score1;
//   score2Elem.textContent = score2;
// Alterne entre joueur 1 et joueur 2
function changerJoueur() {
  joueurActuel = (joueurActuel === 1) ? 2 : 1;
}