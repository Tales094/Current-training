//Récup 10 mot dans une API
fetch("https://trouve-mot.fr/api/random/2")
.then((response) =>response.json())  //transforme la réponse JSON en objet JavaScript
.then((words) => console.log(words))

// Afficher mots
const boiteAMots = document.createElement("div");
boiteAMots.classList.add("radom-words"),