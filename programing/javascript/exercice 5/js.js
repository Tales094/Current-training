//  exercice 6

const carre = document.querySelector(".ok")
const boddy = document.body

console.log(carre);

// carre.addEventListener("click", () =>{
//     console.log("carre");
//     carre.style.backgroundColor = "yellow";
//     carre.style.width = "600px";
    
// })
carre.addEventListener("click", () => {
    carre.classList.toggle("change");
    // carre.style.backgroundColor = "black"
    // carre.style.width = "300px";
});

const carre2 = document.querySelector(".okk")


console.log(carre2);

carre2.addEventListener("click", () => {
    carre2.classList.toggle("change2");
    carre3.classList.toggle("change3" );
    // carre2.classList.toggle("oeil")
});

const carre3 = document.querySelector(".okkk")


console.log(carre3);

carre3.addEventListener("click", () => {
    carre3.classList.toggle("change3" );
    // carre3.classList.toggle("oeil")
});









// function ageer(a,b){
//     typeEvent = a;
//     test = b
// }
//  ageer(18)
// EventTarget.addEventi.is

// meme chose
// function test ({

// })

// let test = () =>{

// }





// console.log(test);
// exemple:
// const carre = document.getElementById('test');
// const body = document.body

// function changeSize(elem,w,h){
//     const carre = document.getElementById(elem);

//     carre.addEventListener("click", () => {
//     carre.style.backgroundColor = "yellow";
//     carre.style.width = w + "px";
//     carre.style.height = h + "px";
    
// })
// }

// changeSize("test", 300, 500)
// changeSize("demo2", 600, 10)


// carre.addEventListener("click", () => {
//     carre.style.backgroundColor = "yellow";
//     carre.style.width = w + "px";
//     carre.style.height = h + "px";
    
// })