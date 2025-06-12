                                                            // Exercice 1 : //
                                                //  Modification du contenu d'un élément: //




// Ajoutez un bouton à votre page HTML et un paragraphe vide. 




// Lorsque vous cliquez sur le bouton, le texte "Hello, world!" doit être ajouté au paragraphe.
const bouton = document.getElementById("button1")     //La tu es sur la DIV//
// const paragraphe = document.getElementById('para')
const paragraphe = document.querySelector("p")
const lien = document.querySelector("ul")
const lien2 = document.createElement("li")
const lien3 = document.querySelector("li")

bouton.addEventListener("click", (e) => {
    paragraphe.textContent = "THE WOLRD IS YOUR !";
    paragraphe.style.color = "white"
    paragraphe.style.fontSize = "60px" ;
    lien.style.color = "red"
/////////////////////////////////////////////////////////
    //AJOUTER UN ELEMENT :
    lien2.textContent = "SAUVEGARDER";
    document.querySelector("ul").appendChild(lien2);
    // RETIRER UN ELEMENT : 
    if (lien3) {
        lien.removeChild(lien3)
    }

 console.log(e);
 
})

                                            // Exercice 5 : Gestion d'événements multiples : //

// Ajoutez trois boutons à votre page HTML, chacun ayant un identifiant unique. 
// Créez une seule fonction de gestionnaire d'événements JavaScript. 
// Lorsque vous cliquez sur l'un des boutons, un message s'affiche dans la console 
// indiquant l'identifiant du bouton sur lequel vous avez cliqué.

const boutonOne = document.getElementById("btn1")
const boutonTwo = document.getElementById("btn2")
const boutonThree = document.getElementById("btn3")
console.log(boutonOne);
console.log(boutonTwo);
console.log(boutonThree);



function gererClic(event) {
    console.log("Bouton cliqué : " + event.target.id);
    
}

document.getElementById("btn1").addEventListener("click",gererClic);
document.getElementById("btn2").addEventListener("click",gererClic);
document.getElementById("btn3").addEventListener("click",gererClic);