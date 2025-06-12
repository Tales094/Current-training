const menuToggle = document.getElementById('menu-toggle');
const menu = document.querySelector(".menu");
console.log(menuToggle);
console.log(menu);

document.addEventListener("DOMContentLoaded", () =>{
    const menuToggle = document.getElementById('menu-toggle');
    const menu = document.querySelector(".menu");

    menuToggle.addEventListener("click", () => {
        menu.classList.toggle("active")
    })
})

