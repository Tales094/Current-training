                                                            // Exercice 1 : //
                                                //  Modification du contenu d'un élément: //




// Ajoutez un bouton à votre page HTML et un paragraphe vide. 




// Lorsque vous cliquez sur le bouton, le texte "Hello, world!" doit être ajouté au paragraphe.
const bouton = document.getElementById("button1")
// const paragraphe = document.getElementById('para')
const paragraphe = document.querySelector("p")


bouton.addEventListener("click", (e) => {
    paragraphe.textContent = "THE WOLRD IS YOUR !";
    paragraphe.style.color = "white"
    paragraphe.style.fontSize = "60px" ;
 console.log(e);
 
})