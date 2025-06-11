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

// 2. Indiquer sur quelle element evenement ce produit: 
document.addEventListener("mousemove", (event) => {
    follow.style.left = event.clientX - 20 + "px",    //Positionner l'element a GAUCHE //
    follow.style.top = event.clientY - 20 + "px",     //Positionner l'element en HAUT //
    follow.style.right = event.clientX + "px",        //Positionner l'element a DROITE //
    follow.style.bottom = event.clientY + "px";       //Positionner l'element EN BAS //
   
    //"- 20" signifie le calcul pour ajuster correctement le cercle o centre du cursor//
    // calcul : décalé la position de moitié de sa largeur et de sa hauteur : //
    // const offsetX = follow.offsetWidth / 2; 
    // const offsetY = follow.offsetHeight / 2;
    // follow.offsetWidth : donne la largeur du cercle (par exemple 40px).
    // follow.offsetHeight : donne la hauteur du cercle (par exemple aussi 40px).
    // En divisant par 2, tu obtiens le rayon (moitié de la taille), soit le décalage nécessaire pour que le centre du cercle tombe pile sur le curseur
    // Comme le cercle et de 40px on divise par 2 : offsetX = 40 / 2 = 20;

console.log(event.clientX,event.clientY);


})

// AJOUTER UNE EFFET DE TRANSPARENCE EN SURVOL SUR LES TXT : 

let texts = document.querySelectorAll('#okk')

texts.forEach(text => {
    text.addEventListener("mouseenter", () => {
        follow.style.backgroundColor = "transparent"
    });
    text.addEventListener("mouseleave", () => {
        follow.style.backgroundColor = "rgba(0, 0, 0, 0.822)";
    })
})
