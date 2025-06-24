const form = document.getElementById('contact-form');

form.addEventListener('submit', function(event) {
  event.preventDefault(); // Empêche le rechargement de la page

  const nameInput = document.getElementById('full-name').value;
  const age = document.getElementById("age").value;
  const date = document.getElementById("date").value;
  const dateN = document.getElementById("datedenaissance").value;

   fetch('https://685a97729f6ef96111570842.mockapi.io/data', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: nameInput,
      age : age,
      date : dateN ,
      jourDeNaissance : date,

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
