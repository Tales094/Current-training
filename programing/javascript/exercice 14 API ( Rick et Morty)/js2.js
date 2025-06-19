const container = document.getElementById("characters-contain");

async function fetchAllCharacters() {
  try {
    // 1re requête pour savoir combien de pages il y a
    const firstResponse = await fetch("https://rickandmortyapi.com/api/character");
    const firstData = await firstResponse.json();
    const totalPages = firstData.info.pages;
    
    

    // Boucle sur toutes les pages
    for (let page = 1; page <= totalPages; page++) {
      const response = await fetch(`https://rickandmortyapi.com/api/character?page=${page}`);
      const data = await response.json();

      // Pour chaque personnage, créer une carte
      data.results.forEach(character => {
        const card = document.createElement("div");
        card.className = "card";

        card.innerHTML = `
          <img src="${character.image}" alt="${character.name}">
          <h3>${character.name}</h3>
        `;

        container.appendChild(card);
      });
    }
  } catch (error) {
    console.error("Erreur lors du chargement :", error);
  }
}

fetchAllCharacters();
