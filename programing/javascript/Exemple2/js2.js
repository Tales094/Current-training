// Récupération de 10 mots via l'API
fetch("https://trouve-mot.fr/api/random/10")
  .then((response) => response.json())
  .then((words) => {
    console.log("Mots reçus :", words);

    // Pour chaque mot reçu, on crée un <p> et on l'attache au body
    words.forEach((word) => {
      const wordElement = document.createElement("p");
      // renvoi a un tableau d'object(pas a un tableau simple) dc ne peut pas afficher les mots
    //   wordElement.textContent = word; 
      wordElement.textContent = word.name.toUpperCase(); // affiche le mot correctement
      wordElement.classList.add("words");
      document.body.appendChild(wordElement);
    });
  })
  .catch((error) => {
    console.error("Erreur lors de la récupération :", error);
  });