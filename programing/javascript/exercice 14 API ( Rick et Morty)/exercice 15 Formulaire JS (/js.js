const form = document.getElementById('contact-form');

form.addEventListener('submit', function(event) {
  event.preventDefault(); // Empêche le rechargement de la page

  const nameInput = document.getElementById('full-name').value;
  const fullName = nameInput.value.trim();

  if (!fullName) {
    alert("Veuillez entrer un nom.");
    return;
  }

  // Remplace cette URL par ton vrai endpoint MockAPI
  const apiUrl = "https:// 685a8d179f6ef9611156de4e.mockapi.io/USER/:endpoint";

  fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
         name: fullName 
        })
  })
  .then(response => {
    if (!response.ok) {
      throw new Error("Erreur lors de l'envoi à l'API");
    }
    return response.json();
  })
  .then(data => {
    alert("Nom envoyé avec succès ! ID : " + data.id);
    form.reset(); // Réinitialise le formulaire
  })
  .catch(error => {
    console.error("Erreur : ", error);
    alert("Une erreur est survenue.");
  });
});



// .then((response) => {
//     return response.json();
// })
// .then(function(data) {
//     alert(`Utilisateur créé avec succès : ${JSON.stringify(data)}`);
// });
