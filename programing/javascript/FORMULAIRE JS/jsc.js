const form = document.getElementById('contact-form');

form.addEventListener('submit', function(event) {
  event.preventDefault(); // Empêche le rechargement de la page

  const nameInput = document.getElementById('full-name').value;
  const nameUse = document.getElementById("username").value;
  const mail = document.getElementById("email").value;
  const motDePass = document.getElementById("motdepasse").value;
  const verifMotDePas = document.getElementById("confirmMDP").value;
  // const genre = document.getElementById('genre').value;
  const gender = document.querySelector('input[name="gender"]:checked')?.value;
  const pays = document.getElementById('pays').value;
  const conditions = document.getElementById('conditions').checked;
  const newsletter = document.getElementById('news').checked;
  const age = document.getElementById('age').value;
  const date = document.getElementById('date').value;
  const dateN = document.getElementById('datedenaissance').value;

  if (pays !== "") {
  console.log("Pays sélectionné :", pays); // ex : "france"
} else {
  console.log("Aucun pays sélectionné");
}

   fetch('https://685a97729f6ef96111570842.mockapi.io/data', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: nameInput,
      nameUser : nameUse,
      email : mail,
      passwords : motDePass,
      validPass : verifMotDePas,
      genre : gender,
      pays : pays,
      conditions : conditions,
      newsletter : newsletter,
      // age : age,
      // date : dateN ,
      // jourDeNaissance : date,

    })
  })
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    alert(`Utilisateur créé avec succès : ${JSON.stringify(data)}`);
  })
});




// .then((response) => {
//     return response.json();
// })
// .then(function(data) {
//     alert(`Utilisateur créé avec succès : ${JSON.stringify(data)}`);
// });
