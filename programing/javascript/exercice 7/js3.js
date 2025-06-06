// while(1=1){
//     console.log(while);
    
// }

// let variable = 1

// while (variable >= 1) {
//     console.log("bonjour");
    
// }

// let nombre = 1

// while(nombre <= 10){
//     nombre++
// console.log("nombre");   
// }


// let number = prompt("veuillez enter un number")
// console.log(number);

// let number1 = 100
// let numberSecret = 59

// while(number1 !== numberSecret)
//     number1 = prompt("veuillez enter un number");
//     number1 = Number(numberSecret)

// console.log(number1);




// while(number1 <= 100){
//     number1++
//     console.log(number1);
    
// }

// let number2 = prompt("veuillez enter un number")
// console.log(number2);




// 

// Le nombre à deviner
let secret = 7; 
// La variable pour stocker la réponse de l'utilisateur
let guess; 

// Boucle tant que la réponse est incorrecte
while (guess != secret) {
  guess = prompt("Devine le nombre (entre 1 et 10) :");
   // Convertit la chaîne en nombre
  guess = Number(guess);

  
}

alert("Bravo ! Tu as trouvé le bon nombre !");

// 





//UTILISATION DU WHILE ET SON FONCTIONNEMENT//
            //1er Methode//


let nombreATrouver = 59 ; // Creation d'une variable avec le nombre à trouver
let tentative; // Creation d'une variable tentative

while (tentative !== nombreATrouver) {
    tentative = prompt("Devinez un nombre entre 1 et 100 :");
    // Si ce n'est pas le bon nombre alors console log "ce n'est pas le bon nombre"
    // tentative = Number(nombreATrouver);
    tentative = Number(tentative);

}
alert("Bravo ! bro you are a beast")
// console.log("Bravo, vous avez deviné le nombre !");