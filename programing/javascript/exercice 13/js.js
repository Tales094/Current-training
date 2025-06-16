// MENU BURGER-HELP //

const menuHelp = document.getElementById('menu-help');
const help = document.querySelector(".help");
console.log(menuHelp);
console.log(help);

document.addEventListener("DOMContentLoaded", () =>{
    const menuHelp = document.getElementById('menu-help');
    const help = document.querySelector(".help");

    menuHelp.addEventListener("click", () => {
        help.classList.toggle("active")
    })
})
