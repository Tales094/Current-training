data.results.forEach(character => {
  const card = document.createElement("div");
  card.className = "card";

  const image = document.createElement("img");
  image.src = character.image;
  image.alt = character.name;

  // ✅ Ajoute l'événement pour afficher la modale
  image.addEventListener("click", () => {
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modal-img");
    modalImg.src = character.image;
    modalImg.alt = character.name;
    modal.classList.remove("hidden");
  });

  const name = document.createElement("h3");
  name.textContent = character.name;

  card.appendChild(image);
  card.appendChild(name);
  container.appendChild(card);
});
