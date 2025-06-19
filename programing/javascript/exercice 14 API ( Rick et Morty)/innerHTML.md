                                            innerHTML
La ligne suivante :
card.innerHTML = `
  <img src="${character.image}" alt="${character.name}">
  <h3>${character.name}</h3>
`;
sert à insérer dynamiquement du contenu HTML dans chaque carte de personnage. Je t’explique précisément chaque partie :

📌 Décomposition ligne par ligne
👉 card.innerHTML = ...
Cela permet d’ajouter du HTML dans l’élément <div class="card">.

innerHTML insère le contenu en tant que HTML (pas juste du texte).

👉 Backticks `...` (template literals)
C’est ce qui permet d’utiliser ${...} pour insérer des variables dans une chaîne.

Exemple : ${character.name} devient Rick Sanchez, ou n'importe quel nom du personnage.

👉 <img src="${character.image}" alt="${character.name}">
<img> : affiche l'image du personnage.

src="${character.image}" : insère l'URL de l'image (venant de l'API).

alt="${character.name}" : texte alternatif, utile pour l’accessibilité (et si l’image ne charge pas).

👉 <h3>${character.name}</h3>
<h3> : titre de niveau 3 (nom du personnage affiché sous l’image).

${character.name} : remplace par le nom réel du personnage, comme "Morty Smith".

✅ Exemple réel généré
Si character.name = "Rick Sanchez" et character.image = "https://...", alors ça deviendrait :

<div class="card">
  <img src="https://rickandmortyapi.com/api/character/avatar/1.jpeg" alt="Rick Sanchez">
  <h3>Rick Sanchez</h3>
</div>

📌 Pourquoi utiliser innerHTML ici ?
C’est rapide et simple pour créer une petite structure HTML.

Idéal quand le contenu est bien maîtrisé (ex : données sûres d’une API officielle).

⚠️ Astuce : éviter innerHTML quand on manipule du contenu utilisateur
Dans d'autres cas (ex : messages de formulaire), on évite innerHTML pour ne pas risquer des failles XSS (injections de code). On utiliserait plutôt createElement() + textContent.

