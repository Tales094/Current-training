let data = [1,2,3,4,5];
console.log(data);


let prenom = ['Alexandre', 'Antoine', 'Camille', 'Nath', 'Komi','Jul','...']
console.log(prenom);


prenom.forEach( (element) => {
    console.log(element);
    
})

const numbers = [1,2,3,4,5];
const doublet = numbers.map(function(number){
    return number * 2;
})

// const demo = numbers.map( (number) => {
//     return number + boujours
// })

const notes = [20,15,12,15,16,3,20];

const notesSupA10 = notes.filter( (note) => {
    return note >= 13;    
})

console.log(notesSupA10);


const notesAvecMap = notes.map(function(number) {
    return number + 10
})
console.log(notesAvecMap);

                        // OU BIEN //
// const notesAvecMap = notes.map(function(elem) {   //nom de la variable de la function//
//     return elem + 10
// })

const allDiv = document.querySelectorAll('div')

console.log(allDiv);
console.log("Nombre de Divs: ", allDiv.length);

allDiv[0].style.backgroundColor = 'red'
allDiv[1].style.backgroundColor = 'red'
allDiv[2].style.backgroundColor = 'red'
allDiv[3].style.backgroundColor = 'red'
allDiv[4].style.backgroundColor = 'red'

//VERSION 1 CHANGER COULEUR DIV UNIQUEMENT : //



// allDiv.forEach( (element) => {
//     element.style.backgroundColor = 'red';

//     element.addEventListener('click', (e) => {
//         allDiv[0].style.backgroundColor = "black" 
//  alert('Yo !');
//     })
   //CHANGER LE COULEUR O CLIK SUR LA DIV //

// });



//VERSION 2 RECHANGER LA COULEUR DE LA DIV DU DEBUT : //


allDiv.forEach( (element) => {
    element.style.backgroundColor = 'red';

    element.addEventListener('click', (e) => {
        if (allDiv[0].style.backgroundColor === 'red'){
            allDiv[0].style.backgroundColor = "black"
        
      } else
        allDiv[0].style.backgroundColor = 'red' 
        //RECHANGE LE COULEUR O CLIK SUR LA DIV //
 alert('Yo !');
    })
   

});