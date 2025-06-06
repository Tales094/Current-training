
                        // Exercice 3 :,
// Demandez à l'utilisateur de deviner un nombre entre 1 et 100.
//  Utilisez une boucle while pour permettre à l'utilisateur de saisir 
//  des nombres jusqu'à ce qu'il devine correctement.

// 1- Pouvoir saisir des nombres
// 2- while
// 3 -Savoir si le nombre entré est celui qu'on cherche

// ----------------------------------------------------------------//

            //UTILISATION DU WHILE ET SON FONCTIONNEMENT// System de boucle
                                 //1er Methode//



let secretNumber = 59 ;                 //Definition de la variable avec sa Valeur "59"//
let oneTentative ;                      //Definition de la variable sans valeur//


while(oneTentative !== secretNumber){
// Activation du message "Devinez un..." 
// A l'aide du prompt(Choisir une variable sans valeur"oneTant.."//
    oneTentative = prompt("Devinez un nombre entre 1 et 100 :")  //Sa valeur est defini ici//
//Convertir la chaine(txt) en nombre (depuis prompt)// 
// Permet de comparer avk "secretN.."qui est un nombre//
    oneTentative = Number(oneTentative);
    console.log(oneTentative);      //Permet de verif si tout va bien(console.log)[Affiche si il ya des erreur]//
    
}

alert("BINGO ! BRO YOU ARE A BEAST")



                                //2éme Methode//

const secretNumber2 = Math.floor(Math.random() * 100) + 1;
let guess = 0; // initialisation

let attempts = 0; // nombre de tentatives

while (guess !== secretNumber2) {
  // Demander à l'utilisateur de deviner
  guess = (prompt("Devinez un nombre entre 1 et 100 :"));
  //  guess = parseInt(prompt("Devinez un nombre entre 1 et 100 :"));

  guess = Number(guess);
  console.log(guess);
  if (isNaN(guess)) {
  alert("Ce n'est pas un nombre valide !");
  continue; // Recommence la boucle sans compter cette tentative
 
}
  
  attempts++;

  if (guess < secretNumber2) {
    alert("Trop petit !");
  } else if (guess > secretNumber2) {
    alert("Trop grand !");
  } else {
    alert("Bravo ! Vous avez trouvé le nombre en " + attempts + " tentative(s).");
  }

}


                            // Correction//




let nombreGagnant = 33;
let nombreEntre;

while(nombreEntre !== nombreGagnant){
    nombreEntre = parseInt(prompt("Entre un nombre"))   
// break
}
console.log("VICTOIRE");          //juste sa c finish//




                            //Avec if(si)//

while(nombreEntre !== nombreGagnant){
    nombreEntre = parseInt(prompt("Entre un nombre"))   
// break   //Arett la boucle[break=casee la boucle]//
    if (nombreEntre == nombreEntre){
        alert("c'est gangné")
    }
// console.log("VICTOIRE");    

}

                            //Autre methode//
//????????????????????????????????????????????????????????????????????????????????????//
let  checkWin = false

let nbre = prompt("veuiller rentre chez vous")
while(checkWin == false){
    if(nbre > 100){
        nbre = prompt("le nombre que vs avex entré erst trop grand")
    }
    if (nbre < 50){
        nbre = prompt("le  nbre est trop petit")
    }
    if(nbre >= 50 && nbre <= 100){
        alert("vous avez trouver la valeur")
    checkWin = true
    }
}
//?????????????????????????????????????????????????????????????????????????????????????//