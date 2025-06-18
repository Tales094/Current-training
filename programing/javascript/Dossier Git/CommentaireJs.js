// MENU BURGER-HELP //
/****
 * @returns {void}
 * @description Active ou désactive l’affichage du menu d’aide 
 * quand on clique sur le bouton avec l’id "menu-help".
 * Cela ajoute ou retire la classe "active" sur l’élément ".help".
 * 
****/
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

// SELECTION D'UN MOT AU HASARD //
let motADeviner = motMacabre[Math.floor(Math.random() * motMacabre.length)]
console.log("Mot A Trouver :", motADeviner);
// AFFICHAGE DES LETTER MASQUEES //
let motMasque = "_".repeat(motADeviner.length);
document.querySelector(".words").textContent = motMasque.split("").join(" ");

let lettresDevines = Array(motADeviner.length).fill("_")

const afficherMot = () => {
    document.getElementById("words-to-find").textContent = lettresDevines.join(" ");
};
afficherMot();

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
/****
 * 
 * 
 * 
 * 
 ****/







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
        console.log("Mot A Trouver :", motADeviner);
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
        
        if(joueurActuel === 1) score1++;
        else score2++;
        alert(`Joueur ${joueurActuel} a gangné !`);
        
    }else {
    // jouerSonPerdu()
    alert(`Joueur ${joueurActuel} a perdu ! Le mot était : ${motADeviner}`);
    }  
    
    
    // Mise à jour des scores
  score1Elem.textContent = score1;
  score2Elem.textContent = score2;

  joueurSuivant()

  // Pause pour relancer une Party
    setTimeout(() => {
        nouvellePartie();
    }, 500);
    
}

//Definition des constantes
const score1Elem = document.getElementById("score1");
const score2Elem = document.getElementById("score2");
// Definition des variables
let score1 = 0;
let score2 = 0;
let joueurActuel = 1;
// Alterne entre joueur 1 et joueur 2
function joueurSuivant() {
  joueurActuel = (joueurActuel === 1) ? 2 : 1;
}

// relancer la party pour le joueur suivant
function nouvellePartie() {
    erreurs = 0;
    motADeviner = motMacabre[Math.floor(Math.random() * motMacabre.length)]
    lettresDevines = Array(motADeviner.length).fill("_");
    afficherMot();
    activerClavier(true);
        document.querySelectorAll("footer button").forEach(button => {
        button.disabled = false;
    });
    

    // Réinitialise le visuel du pendu si tu en as plusieurs images
    document.querySelector(".hangman").src = "image/Hangman-0.png";

    // Réactive tous les boutons du clavier
    document.querySelectorAll("footer button").forEach(button => {
        button.disabled = false;
    });
    
}
 //Réinitilise le jeu
 function resetGame(params) {
    //SCORE :
    score1 = 0;
    score2 = 0;
    joueurActuel = 1;

    //Mise a jour du DOM
    score1Elem.textContent = score1;
    score2Elem.textContent = score2;

    nouvellePartie()

 }

help.classList.remove("active") // Pour que le menu s'enleve quand tout est reset
help.classList.add("fade-out")

menuHelp.addEventListener("click", () => {
    // help.classList.toggle("active");
    help.classList.remove("fade-out"); // s'assurer qu'il n'est pas en train de disparaître
});

document.getElementById("btn-rejouer").addEventListener("click", () => {
    resetGame();
    help.classList.remove("active");
    help.classList.add("fade-out");
    console.log("Mot A Trouver :", motADeviner);
    
    // Supprime la classe après animation (rejouer plusieurs fois)
setTimeout(() => {
    help.classList.remove("fade-out");
}, 500); 
});




  console.log()






// // fonction au démarrage
// document.addEventListener("DOMContentLoaded", () => {
//     const menuHelp = document.getElementById('menu-help');
//     const help = document.querySelector(".help");

//     menuHelp.addEventListener("click", () => {
//         help.classList.toggle("active");
//     });

//     // Lance la première manche
//     nouvellePartie();
// });
