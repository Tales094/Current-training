
// fixer des conditions


//1er méthode:

let age = 25;
if ( age >=18){
    console.log("la personne est majeur");   
}

else {
    console.log("la personne est mineur");
    
}

let age2 = 12;
if ( age2 >=18){
    console.log("la personne est majeur");   
}

else {
    console.log("la personne est mineur");
    
}

// "if" va tjr avec "else"
// if signifie "si" et else signifie "alor" 


// Avec les lettre demander une comparaison avec: "="(egal) et "=="(comparaison) 

// exemple 1:

let nom = "Jackson";
if( nom == "Jackson")[
    console.log("il se nomme banger")
    
]

else{
    console.log("il se nomme Big Banger");

}
//exemple 2:

let nom2 = "Ali";
if( nom2 == "Mohamed")[
    console.log("il se nomme Mohamed Ali")
    
]

else{
    console.log("il se nomme Casus Clay");
    
}
// exemple 3:

//Creer une function nommée "verifierAge"(Nom de la Variable) 
// les parenthéses aprés signifie le contenue de la variable(age3=160)

function verifierAge(age3) {
    if (age3 >= 18) {
        console.log("la personne est Majeur");
    } else {
        console.log("la personne est Mineur");
    }
}
//variable et son contenu:

verifierAge(160)




// Boucles
// Exercice 1 :,
// Créez une fonction qui prend en entrée l'âge d'une personne et affiche 
// "Majeur" si l'âge est supérieur ou égal à 18, sinon affichez "Mineur".


// Configu exacte

// function VriAge(){
//     if (){
//         console.log("");
        
//     }
//     else{
//         console.log("");
        

//     }
// }  

// VriAge()

let zge = 22; // genere un nombre aleatoire , il faut  ajouter api Math.random

function verifeage(zge){
    if (zge >=18){
        return "majeur";
    }
    else{
        return "mineur"
    }
}

let verif = verifeage(zge);


console.log(verif);




// function manipulation(a,b){
//     return a * b
// }

// let nombre = manipulation(3,4)

// // let nombre = 12;
// console.log(nombre);










// let tab = ["bordeaux", "montp", "31 toulouse"]


// let mot = ""
//  console.log(tab[0]);

// for (let i = 0; i< tab[0].length; i++) {
//   const element = tab[0][i];
//   console.log();
  
//     }


// exercice2
// Exercice 2 :
// Affichez les nombres pairs de 1 à 20 en utilisant une boucle for.

    let tab = ["Bordeaux", "Montpellier", "Toulouse", "Dunkerque"]
// console.log(tab.length);

console.table(tab);

let mot = ""
// console.log(tab[0].length);


for (let i = 0; i < tab[0].length; i = i + 1) {
    mot += tab[0][i]
    console.log(mot);  
}

// 
for (let i = 1; i <= 20; i++) {        //++ signifie
    if (i % 2 === 0) {
        console.log(i);
    }
}

// Intégrer un tableau
for (let i = 3; i <= 30; i+=3) {
    // const number = i;
    // tab += number

    tab.push(i)
    console.table(tab);
}
// imperraire
for (let index = 1; index <= 20; index = index + 2){
    console.log(index);
    
}
//paire
for (let inde = 1; inde <= 20 ; inde++){
    if (inde % 2 === 0){
        console.log(inde);
        
    }
}




