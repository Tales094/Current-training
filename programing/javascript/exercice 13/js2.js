                                //EFFET SPECIAUX//

//  Effet visuel rouge (flash quand mauvaise lettre) //  

function flashErreur() {
  document.body.classList.add("flash-erreur");
  setTimeout(() => {
    document.body.classList.remove("flash-erreur");
  }, 300);
}
// Son sinistre sur erreur ou perte //
function jouerSonErreur() {
  document.getElementById("audio-erreur").play();
}

function jouerSonPerdu() {
  document.getElementById("audio-perdu").play();
}

// Ensuite, dans ton gestionnaire de touche (quand une lettre est fausse), 
// tu peux faire ://


                    // Si la lettre est mauvaise :
jouerSonErreur();
flashErreur();
                    // Et à la fin du jeu, si le joueur perd :

 jouerSonPerdu();
// Affiche un message de fin par exemple                   