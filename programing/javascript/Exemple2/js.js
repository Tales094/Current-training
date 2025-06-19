//Récup 10 mot dans une API
fetch("https://trouve-mot.fr/api/random/10")
.then((response) =>response.json())  //transforme la réponse JSON en objet JavaScript
.then((words) => {
    console.log("Mots reçus :", words);

// Afficher mots
const boiteAMots = document.querySelector(".words-to-find");
boiteAMots.classList.add("words-to-find");
boiteAMots.innerHTML = "";  // retire lélement de la div


// creer un élément pour chaque mot (p)
words.forEach((word) => {
    const wordElem = document.createElement("p");
    wordElem.textContent = word.name // inserr le mot dans le paragraphe
    wordElem.classList.add("words")
    boiteAMots.appendChild(wordElem);
});

//ajoute la boiteAMot dans le body
// document.body.appendChild(boiteAMots);
// })
})
.catch((error) => {
    console.error("Erreur lors de la récupréation :", error);   
});