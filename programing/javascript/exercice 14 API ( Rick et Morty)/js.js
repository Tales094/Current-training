// constante pour selectionner la DIV avec son id
const container = document.getElementById("characters-contain");
// Fonction pour récupérer toutes les page
function fetchAllCharacters() {
    //1er requete pr connaitre le nmbre de pages
    fetch("https://rickandmortyapi.com/api/character")
    .then(response => response.json())
    .then(fData => {
        const totalPages = fData.info.pages;
        // Boucle sur toutes les pages avec then
        for (let page = 1; page <= totalPages; page++) {
            fetch(`https://rickandmortyapi.com/api/character?page=${page}`)
            .then(response => response.json())
            .then(data => {
                data.results.forEach(character => {
                    const card = document.createElement("div");
                    card.className = "card";
                   
                    card.innerHTML = 
                    `<img src="${character.image}" alt="${character.name}">
                    <h3>${character.name}</h3>`;

                    container.appendChild(card);
                });
            })
            .catch(error =>{
                console.error("Erreur Chargement Page"+ page + " :", error);   
            });
        }
    })
    .catch(error => {
        console.error("Erreur Chargement Page :",error); 
    });   
}
// Appel fonction
fetchAllCharacters();

document.getElementById("close").addEventListener("click", () => {
  document.getElementById("modal").classList.add("hidden");
});

// Fermer la modale en cliquant à l’extérieur de l'image
document.getElementById("modal").addEventListener("click", (e) => {
  if (e.target.id === "modal") {
    document.getElementById("modal").classList.add("hidden");
  }
});

    /****
     *** System **
* On commence par récupérer la première page pour avoir le nombre total de pages.

* Puis on crée un tableau de promesses avec un fetch par page.

* Promise.all(promises) attend que toutes les requêtes soient terminées.

* Ensuite, on parcourt toutes les données reçues pour afficher les personnages.

* On gère les erreurs avec .catch.
     * 
     */