NOM DU PROJET :
-> bref descriptif: 
     Le jeu se nomme "JEU DU PENDU A MORT" c'est une version adapté du classique et célébre jeu du pendu.
     Le jeu reprend les meme principe que le jeu original avec un style personnaliser dans un Univers sombre et sinistre,
     jouable en multijoueur(2 joueur) a tour de role pour deviner des mots dans un theme bien particulié(Sinistre,Macabre,Sombre).
     Le joueur ayant trouver le plus de mots(points) a gagné !

     OBJECTIF DU PROJET
     -> C'est quoi l'objectif
L’objectif est de :

    - Reproduire un jeu interactif(Jeu du Pendu) en HTML, CSS et JavaScript.
    - Permettre la possibilité de jouer en Multijoueurs (2 joueurs).
    - Gérer les scores avec un compteur de points,les mots à deviner, les erreurs,les bonnes réponses et les animations qui vont avec(victoire/défaite).
    - Permetre l'utilisation d'un clavier virtuel à la souris ou d'un clavier physique, avec un systeme de touche griser pour les touche dejas utiliser.
     -Rendre le jeu cohérent avec son thème(Sinistre,Macabre,Sombre) et son visuel.

     DECOUPAGE DU PROJET :
-> La manière dont le projet a été découper (les plus gros blocs)
    Le Projet a été découper en plusieur parties:
        1. Le Fichier HTML:
                .Contenue et structure du jeu(Mise en Page,Image de fond,Image Animé,visuel des scores par joueur,bouton pour les touches du clavier,menu...)
        2. Le Style CSS :
                .Configuration et reglage de la pages(Couleur,Style,Animation,Effet Visuel...)
        3. le Fichier JavaScript :
                . Selection alétoire des mots a deviner
                . interaction des touche pour le clavier
                . Scores,Victoire/defaite,tour par tour...
                . resultat
                . Relancer le jeu

    FONCTION PRINCIPALE
-> les fonctions que vous avez créé
        1- afficherMot()
        2- activeClavier(actif) 
        3- verifierLettre(lettre)
        4- joueurSuivant()
        5- nouvellePartie()
        6- finDePartie(gagne)
        7- resetGame()
-> l'objectif de ces fonctions
        1- afficher le mot en cours avec les lettres a trouvées et des undescore pour celles manquantes
        2- active/désactive les boutons du clavier virtuel.
        3- vérifie si la lettre proposée est dans le mot. Gère les erreurs et l'avancement.
        4- change entre joueur 1 et joueur 2
        5- Relance une party avec un nouveau mot à deviner
        6- Gère la fin de la partie, affiche un message de victoire/défaite, met à jour les scores.
        7- Réinitialise totalement les scores et l'état du jeu pour un nouvelle party.
-> Les fonctions déjà existantes que vous avez utilisé
             NOM FUNCTION :                         OBJECTIF:
        *Math.random()/Math.floor      Sélectionner un mot au hasard 
        *addEventListener()            Ecouter les clics sur les boutons,elemenet,touches clavier
        *documentquerySelector         Selection un Element
        *getElementById                Selection un Id
        *alert()                       Affiche un messsage d'arlte prédéfinit
        *consol.log()                  Affiche un msg dans la console
        *setTimeout()                  Exécute une fonction après un délai spécifié