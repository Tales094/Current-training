
                                        //BASE SWITCH//

// switch(key){
//     case value:
//         console.log("jai 10 ans");
//         break;

//         default:
//             break;
        
// }
                                        // EXEMPLE : //
let age = 15;

switch (age) {
    case 10:
        console.log('jai 10 ans');
            break;
        case 11:
            console.log("jai 11 pige");
        case 12:
            console.log("jai 12 pige");
            break   

    default:
        console.log("il n'ya pas de sa de qui corespond");
        
        break;
}




let prenom = "tomas";

switch (prenom) {
    case "tomas":
        console.log("je mappel tomas");
        break;

    case "antoine":        
        console.log("je mappel antoine");
        
      

    default:
        console.log("ou est antoine");
        
        break;
}
                                    // EXERCICE 1 //


// Objectif : Utiliser l'instruction switch pour afficher un plat du jour en fonction du jour de la semaine. (1 = lundi, 2 = mardi, 3 = mercredi, 4 = jeudi, 5 = vendredi, le weekend = default)

// Numéro    Plat du jour
// 1    Spaghetti Bolognaise
// 2    Poulet rôti
// 3    Poisson pané
// 4    Salade composée
// 5    Pizza Margherita

// Ecrire un programme qui permettra de vérifier le plat du jour dans la console

let jour 


switch (jour) {
    case 1:
        
        break;
         case 1:
            console.log("le plat du jour est poulet roti");
            
            break;

         case 2:
             console.log("le plat du jour est Spaghetti");
        
            break;

         case 3:
            console.log("le plat du jour est poisson pané");
            break;
         case 4:
            console.log("le plat du jour est Salade composé");
             break;

         case 5:
            console.log("le plat du jour est Pizza magherita");
            break;

         case 6:
            console.log("le plat du jour est couscous");
            break;

         case 7:
            console.log("le plat du jour est Spécialité du chef");
            break;

    default:
            console.log("le restaurant est fermer");
            
        break;
}


                                // Exercice 4 : //

// Écrivez une fonction qui prend en entrée un mois (1 pour janvier, 2 pour février, etc.)
//  et retourne le nombre de jours dans ce mois. Assurez-vous de gérer correctement 
//  le cas de février pour les années bissextiles (29 jours) et non bissextiles (28 jours)



//1er Methode

function nombreDeJours (mois, annee) {
    if (mois < 1 || mois > 12) {
        return "Mois Invalide"
    }
//Mois De Fevrier :
    if (mois === 2){
        if ((annee % 4 === 0 && annee % 100 !== 0) ||(annee % 400 === 0)) {
            return 29;
        } else {
        return 28;
    }   
    }
    

//Mois 30 Jours :
    if (mois === 4 || mois === 6 || mois === 9|| mois === 11){
        return 30;
    }
      
// Mois 31 Jours :
    return 31;
    
}

console.log(nombreDeJours(1,2020));
console.log(nombreDeJours(2,2020));
console.log(nombreDeJours(3,2020));
console.table(nombreDeJours(4,2020));
console.log(nombreDeJours(5,2020));
console.log(nombreDeJours(6,2020));
console.log(nombreDeJours(7,2020));
console.log(nombreDeJours(8,2020));
console.log(nombreDeJours(9,2020));
console.log(nombreDeJours(10,2020));
console.log(nombreDeJours(11,2020));
console.log(nombreDeJours(12,2020));
console.log(nombreDeJours(13,2020));


//Mode Tableau
console.table([
    {mois: 1, jours: nombreDeJours(1,2020) },
    {mois: 2, jours: nombreDeJours(2,2020) },
    {mois: 3, jours: nombreDeJours(3,2020) },
    {mois: 4, jours: nombreDeJours(4,2020) },
    {mois: 5, jours: nombreDeJours(5,2020) },
    {mois: 6, jours: nombreDeJours(6,2020) },
    {mois: 7, jours: nombreDeJours(7,2020) },
    {mois: 8, jours: nombreDeJours(8,2020) },
    {mois: 9, jours: nombreDeJours(9,2020) },
    {mois: 10, jours: nombreDeJours(10,2020) },
    {mois: 11, jours: nombreDeJours(11,2020) },
    {mois: 12, jours: nombreDeJours(12,2020) },
    {mois: 13, jours: nombreDeJours(13,2020) },

])
console.table([
{ annee: 2020, mois: 2, jours: nombreDeJours(2, 2020) },
  { annee: 2021, mois: 2, jours: nombreDeJours(2, 2021) },
  { annee: 2022, mois: 2, jours: nombreDeJours(2, 2022) },
  { annee: 2023, mois: 2, jours: nombreDeJours(2, 2023) },
  { annee: 2024, mois: 2, jours: nombreDeJours(2, 2024) },
  { annee: 2025, mois: 2, jours: nombreDeJours(2, 2025) },
]);

// 2eme methode
// - mode tableau :
// function nombreDeJours (mois, annee) {
//     return new Date(annee, mois, 0).getDate();
// }

// const joursParmois = [];

// for(let mois = 1; mois <= 13; mois++) {
//     joursParmois.push({
//         Mois : mois,
//         Jours: nombreDeJours(mois, 2020)
//     })
// }
// console.table(joursParmois)

// mode normal


//3eme methode

let choixMois =2;
let choixAnnnee =2020

function nombreDeJourss(mois, annee){
    switch (mois) {
        case 1:
            console.log(31); 
            break;
        case 2:
            if (mois === 2){
        if ((annee % 4 === 0 && annee % 100 !== 0) ||(annee % 400 === 0)) {
            console.log(29);
        } else {
            console.log(28);
    }   
    }
            break;
        case 3:
            console.log(31); 
            break;
        case 4:
            console.log(30); 
            break;
        case 5:
            console.log(31); 
            break;
        case 6:
            console.log(30); 
            break;
        case 7:
            console.log(31); 
            break;
        case 8:
            console.log(31); 
            break;
        case 9:
            console.log(30); 
            break;
        case 10:
            console.log(31); 
            break;
        case 11:
            console.log(30); 
            break;
        case 12:
            console.log(31); 
            break;
        default:
            break;
    }
}

nombreDeJourss(choixMois, choixAnnnee)


