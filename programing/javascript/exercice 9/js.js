const h1 = document.querySelector('h1')
const p = document.querySelector('p')


h1.addEventListener("click", (e)=> {
    console.log(e);
    e.target.style.backgroungColor = "red"
    h1.style.backgroundColor = "red"
    h1.style.textAlign = "center"
    h1.style.textTransform = "uppercase "
   
    
})
p.addEventListener("click", ()=> {
    p.style.color = 'red'
    p.style.textAlign = "center"
    p.style.border = "1px solid black"
    p.style.borderRadius = "60px"
    p.style.backgroundColor = "black"
    p.style.fontWeight = "bolder"

})

const go = document.querySelector('h2')

go.addEventListener('click', () => {
    alert('vous avez clicker sur go')
    console.log("vous avez cliqué");
    let a =12;
    let b = 10;
    let resutl = a * b ;
    go.textContent = resutl
console.log(resutl);
    
})
// console.log(a) // ne fonction pas que dans la function

                                                                //Exercice



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                            //suit les mouvenement de la sourie//

// document.addEventListener('mousemove', (event) => {

//     console.log(event.clientX, event.clientY);   
// })
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// 1- A partir de ce morceau de code, construiser un code js qui permettra à une boule de suivre le curseur de votre souris : //


// 1.Creer une variable :

let follow = document.querySelector('.rectangle')

document.body.addEventListener("mousemove", (event) => {
    follow.style.left = event.clientX + "px",
    follow.style.top = event.clientY + "px"; 
   

// console.log('la sourie se deplace');


})