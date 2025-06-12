const menuToggle = document.getElementById("menu-toggle");
const menu = document.querySelector(".menu");
console.log(menuToggle);
console.log(menu);

document.addEventListener("DOMContentLoaded", () =>{
    const menuToggle = document.getElementById("menu-toggle");
    const menu = document.querySelector(".menu");

    menuToggle.addEventListener("click", () => {
        menu.classList.toggle("active")
    })
})
console.log(document);




// On peut supprimer le "input#checkbox-mobile" ds le "html" car le menu est gerrer avec le Java Script
// Et  aussi l'id= "#checbox-mobile" et "#checbox-mobile:checked - .menu" ds le "CSS" (ce qui fon parti de l'input precedent)