// Liste de mots sombres/sinistres pour le pendu
const motsSinistres = [
  "abîme", "angoisse", "asile", "autopsie", "balafre", "cadavre", "caveau", "cercueil", "charogne",
  "cimetiere", "corbeau", "damnation", "décomposition", "démence", "désespoir", "diabolique",
  "enfer", "enterrement", "fantôme", "funeste", "goule", "hurlement", "lugubre", "malédiction",
  "marécage", "morbide", "nécrose", "obsèques", "ombre", "pendaison", "pénitence", "possession",
  "putréfaction", "revenant", "sacrifice", "sanglant", "sarcophage", "sépulture", "spectre",
  "supplice", "ténèbres", "tombeau", "tourment", "trépas", "vampire", "vengeance", "vermine",
  "viscères", "voix", "zombie"
];

// Variables globales de jeu
let motADeviner = "";              // Mot à deviner (en majuscules)
let lettresDevinees = [];          // Tableau des lettres déjà trouvées ou "_" sinon
let erreurs = 0;                   // Nombre d'erreurs actuelles
const maxErreurs = 6;              // Nombre max d'erreurs (6 images pendu)

let score1 = 0;                   // Score joueur 1
let score2 = 0;                   // Score joueur 2
let joueurActuel = 1;             // Joueur courant (1 ou 2)

// Éléments HTML que l'on manipule
const motElem = document.getElementById("mot-a-deviner");
const score1Elem = document.getElementById("score1");
const score2Elem = document.getElementById("score2");
const hangmanImg = document.querySelector(".hangman");
const audioErreur = document.getElementById("audio-erreur");
const audioPerdu = document.getElementById("audio-perdu");
const audioVictoire = document.getElementById("audio-victoire");

// Fonction pour choisir un mot au hasard et démarrer la partie
function initialiserJeu() {
  // Choix aléatoire dans la liste et passage en majuscules
  motADeviner = motsSinistres[Math.floor(Math.random() * motsSinistres.length)].toUpperCase();
  // Création du tableau de "_" de même longueur que le mot
  lettresDevinees = Array(motADeviner.length).fill("_");
  erreurs = 0;
  afficherMot();
  updateHangman();
  activerClavier(true);
  console.log("Mot à deviner :", motADeviner); // utile pour debug console
}

// Affiche le mot masqué, avec espaces entre lettres
function afficherMot() {
  motElem.textContent = lettresDevinees.join(" ");
}


// Met à jour l'image du pendu selon erreurs
function updateHangman() {
  hangmanImg.src = `image/Hangman-${erreurs}.png`;
}

// Active ou désactive tous les boutons du clavier virtuel
function activerClavier(actif) {
  document.querySelectorAll("footer button").forEach(btn => {
    btn.disabled = !actif;
    if(actif) btn.classList.remove("disabled");
    else btn.classList.add("disabled");
  });
}

// Effet visuel flash rouge quand erreur
function flashErreur() {
  document.body.classList.add("flash-erreur");
  setTimeout(() => {
    document.body.classList.remove("flash-erreur");
  }, 300);
}

// Fonctions pour jouer les sons
function jouerSonErreur() { audioErreur.play(); }
function jouerSonPerdu() { audioPerdu.play(); }
function jouerSonVictoire() { audioVictoire.play(); }

// Vérifie si la lettre est dans le mot
function verifierLettre(lettre) {
  // Ignore si lettre déjà trouvée (ou déjà testée)
  if(lettresDevinees.includes(lettre)) return;

  let trouve = false;
  for(let i = 0; i < motADeviner.length; i++) {
    if(motADeviner[i] === lettre) {
      lettresDevinees[i] = lettre;
      trouve = true;
    }
  }

  if(trouve) {
    afficherMot();
    // Si toutes les lettres sont trouvées, fin de partie victoire
    if(!lettresDevinees.includes("_")) {
      finDePartie(true);
    }
  } else {
    erreurs++;
    updateHangman();
    flashErreur();
    jouerSonErreur();
    if(erreurs >= maxErreurs) {
      finDePartie(false);
    }
  }
}

// Fonction appelée à la fin d’une partie (victoire ou défaite)
function finDePartie(gagne) {
  activerClavier(false);
  if(gagne) {
    jouerSonVictoire();
    alert(`Joueur ${joueurActuel} a gagné !`);
    if(joueurActuel === 1) score1++;
    else score2++;
  } else {
    jouerSonPerdu();
    alert(`Joueur ${joueurActuel} a perdu ! Le mot était : ${motADeviner}`);
  }
  // Mise à jour des scores visibles
  score1Elem.textContent = score1;
  score2Elem.textContent = score2;
  // Change de joueur pour la prochaine partie
  changerJoueur();
  // Redémarre une nouvelle partie après 1.5 secondes
  setTimeout(initialiserJeu, 1500);
}

// Alterne entre joueur 1 et joueur 2
function changerJoueur() {
  joueurActuel = (joueurActuel === 1) ? 2 : 1;
}

// Gère le clic sur les boutons du clavier virtuel
document.querySelectorAll("footer button").forEach(button => {
  button.addEventListener("click", () => {
    let lettre = button.textContent.toUpperCase();
    button.disabled = true;    // Désactive le bouton après clic
    verifierLettre(lettre);
  });
});

// Démarre le jeu à l’ouverture
document.addEventListener("DOMContentLoaded", () => {
  initialiserJeu();
});
