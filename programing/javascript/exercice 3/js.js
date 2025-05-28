
// Selectionner des elements:

let data = {
    "id": "0001",
    "type": "donut",
    "name": "Cake",
    "ppu": 0.55,
    "batters":
    {
        "batter":
            [
                { "id": "1001", "type": "Rick" },
                { "id": "1002", "type": "Chocolate" },
                { "id": "1003", "type": "Blueberry" },
                { "id": "1004", "type": "Devil's Food" }
            ]
    },
    "topping":
        [
            { "id": "5001", "type": "None" },
            { "id": "5002", "type": "Glazed" },
            { "id": "5005", "type": "Morty" },
            { "id": "5007", "type": "helloWorld" },
            { "id": "5006", "type": "Chocolate with Sprinkles" },
            { "id": "5003", "type": "Chocolate" },
            { "id": "5004", "type": "Maple" }
        ]
}

// Selectionner des elememnt 1 par 1 :
console.log(data.name);
console.log(data.ppu);
// Selectionner(afficher): une variable+une element quel contient(ex:.topping)
// + la ligne de lélement voulu(ex: [0] pour la 1er ligne(on par tjr de 0))
// Affiche les 2element de la ligne choisi
console.log(data.topping[0]);
// Selectionne et affcihe: la variable(data) +element(.batters)+sous element(.batter)
// + les element(ligne choisi) qui se trouve entre "[]"(selectionner la ligne corespondante) 
// clef et valeur(keys=id,value=type)
console.log(data.batters.batter[3].id , data.batters.batter[3].type);

// Pour les afficher: mêtre 'console + le nom de la façon dont on veux qu il soi
// (exemple: table(pt tableau, log pour afficher ...) 
// + le nom de la variable
 console.table(data)

 console.log(data);




// Concaténez l'id 1001 et le type Rick dans une phrase ("Rick est l'id 1001")

let phrase = data.batters.batter[0].type + " est l'id " + data.batters.batter[0].id ;
console.log(phrase)

// Concaténez le type de l'id 5004 avec le name "cake" de la même manière que précédemment

let phrases = data.topping[6].type + " de la meme maniére que " + data.name;
 console.log(phrases)



// Création d'objets et manipulation :

 let personne = {
    nom: "Alice" ,
    age : 25 ,
    ville : "Paris" ,
 }

 console.log(personne);
 console.log(personne.nom)
 console.log(personne.age);
 console.log(personne.ville);
 
 
 let comptebancaire = {
    solde : 1000 ,
    titulaire : "John Doe" ,
 }

 console.log(comptebancaire);
 console.log(comptebancaire.solde);
 console.log(comptebancaire.titulaire);


 
 let solde = 500;
 let resultat= comptebancaire.solde + solde;
  console.log(resultat);


  
// 2eme méthode
 
 console.log("Solde initial :",comptebancaire.solde);

comptebancaire.solde += 500;

console.log("Nouveau solde:",comptebancaire)
 console.table(comptebancaire)
