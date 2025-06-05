const c1 = document.querySelector(`#c1`)
const c2 = document.querySelector(`#c2`)
const c3 = document.querySelector(`#c3`)
const c4 = document.querySelector(`#c4`)
const c5 = document.querySelector(`#c5`)
const c6 = document.querySelector(`#c6`)
const c7 = document.querySelector(`#c7`)
const c8 = document.querySelector(`#c8`)
const c9 = document.querySelector(`#c9`)

// const test = document.querySelectorAll
 let turnePlayer = 0;


c1.addEventListener(`click`, () =>{
    if (c1.style.backgroundImage !== ""){
        return
    }

    
    if (turnePlayer == 0){
        c1.style.backgroundImage = "url('image/tony2.jpg')";
        turnePlayer = 1
    }
    else{
        c1.style.BackgroundImage = "url('image/sossa2.jpg')";
        turnePlayer = 0
    }
    verifVictoire()

    // if (c1.style.BackgroundImage == "#ff000079"){
    //     console.log("Gagne");
        
    // }




})
c2.addEventListener(`click`, () =>{
    if (c2.style.backgroundImage !== ""){
        return
    }
if (turnePlayer == 0){
    c2.style.backgroundImage = "url('image/tony2.jpg')";
    turnePlayer = 1
}
else
    {
    c2.style.BackgroundImage = "url('image/sossa2.jpg')";
    turnePlayer = 0
    }
    if (c1.style.BackgroundImage && c2.style.BackgroundImage && c3.style.backgroundImage == "url('image/tony2.jpg')"){
        console.log("VICTOIRE");
        
    }
    verifVictoire()
})


c3.addEventListener(`click`, () =>{

    if (c3.style.backgroundImage !== ""){
        return
    }
if (turnePlayer == 0){
    c3.style.backgroundImage = "url('image/tony2.jpg')";
    turnePlayer = 1
    }
else
    {
    c3.style.BackgroundImage = "url('image/sossa2.jpg')";
    turnePlayer = 0
    }
    verifVictoire()
})





c4.addEventListener(`click`, () =>{

     if (c4.style.backgroundImage !== ""){
        return
    }
if (turnePlayer == 0){
    c4.style.backgroundImage = "url('image/tony2.jpg')";
    turnePlayer = 1
    }
else
    {
    c4.style.BackgroundImage = "url('image/sossa2.jpg')";
    turnePlayer = 0
    }
    verifVictoire()
})



c5.addEventListener(`click`, () =>{

     if (c5.style.backgroundImage !== ""){
        return
    }
if (turnePlayer == 0){
    c5.style.backgroundImage = "url('image/tony2.jpg')";
    turnePlayer = 1
    }
else
    {
    c5.style.BackgroundImage = "url('image/sossa2.jpg')";
    turnePlayer = 0
    }
    verifVictoire()
})



c6.addEventListener(`click`, () =>{

     if (c6.style.backgroundImage !== ""){
        return
    }
if (turnePlayer == 0){
    c6.style.backgroundImage = "url('image/tony2.jpg')";
    turnePlayer = 1
    }
else
    {
    c6.style.BackgroundImage = "url('image/sossa2.jpg')";
    turnePlayer = 0
    }
    verifVictoire()
})



c7.addEventListener(`click`, () =>{

     if (c7.style.backgroundImage !== ""){
        return
    }
if (turnePlayer == 0){
    c7.style.backgroundImage = "url('image/tony2.jpg')";
    turnePlayer = 1
    }
else
    {
    c7.style.BackgroundImage = "url('image/sossa2.jpg')";
    turnePlayer = 0
    }
    verifVictoire()
})



c8.addEventListener(`click`, () =>{

     if (c8.style.backgroundImage !== ""){
        return
    }
if (turnePlayer == 0){
    c8.style.backgroundImage = "url('image/tony2.jpg')";
    turnePlayer = 1
    }
else
    {
    c8.style.BackgroundImage = "url('image/sossa2.jpg')";
    turnePlayer = 0
    }
    verifVictoire()
})




c9.addEventListener(`click`, () =>{

     if (c9.style.backgroundImage !== ""){
        return
    }
if (turnePlayer == 0){
    c9.style.backgroundImage = "url('image/tony2.jpg')";
    turnePlayer = 1
    }
else
    {
    c9.style.BackgroundImage = "url('image/sossa2.jpg')";
    turnePlayer = 0
    }
    verifVictoire()
})



//  CONDITION DE VICTOIRE

 function verifVictoire(){
    // VICTOIRE TONY
    // Horizontal
if (c1.style.BackgroundImage === "url('image/tony2.jpg')" && c2.style.BackgroundImage === "url('image/tony2.jpg')" && c3.style.backgroundImage === "url('image/tony2.jpg')"){
        console.log("VICTOIRE TONY");
        
    }
if (c4.style.BackgroundImage === "url('image/tony2.jpg')" && c5.style.BackgroundImage === "url('image/tony2.jpg')" && c6.style.backgroundImage === "url('image/tony2.jpg')"){
        console.log("VICTOIRE TONY");
        
    }
if (c7.style.BackgroundImage === "url('image/tony2.jpg')" && c8.style.BackgroundImage === "url('image/tony2.jpg')" && c9.style.backgroundImage === "url('image/tony2.jpg')"){
        console.log("VICTOIRE TONY");
        
    }
    // vertical
if (c1.style.BackgroundImage === "url('image/tony2.jpg')" && c4.style.BackgroundImage === "url('image/tony2.jpg')" && c7.style.backgroundImage === "url('image/tony2.jpg')"){
        console.log("VICTOIRE TONY");
        
    }
if (c2.style.BackgroundImage === "url('image/tony2.jpg')" && c5.style.BackgroundImage === "url('image/tony2.jpg')" && c8.style.backgroundImage === "url('image/tony2.jpg')"){
        console.log("VICTOIRE TONY");
        
    }
if (c3.style.BackgroundImage === "url('image/tony2.jpg')" && c6.style.BackgroundImage === "url('image/tony2.jpg')" && c9.style.backgroundImage === "url('image/tony2.jpg')"){
        console.log("VICTOIRE TONY");
        
    }
    // diagonal
if (c1.style.BackgroundImage === "url('image/tony2.jpg')" && c5.style.BackgroundImage === "url('image/tony2.jpg')" && c9.style.backgroundImage === "url('image/tony2.jpg')"){
        console.log("VICTOIRE TONY");
        
    }
if (c3.style.BackgroundImage === "url('image/tony2.jpg')" && c5.style.BackgroundImage === "url('image/tony2.jpg')" && c7.style.backgroundImage === "url('image/tony2.jpg')"){
        console.log("VICTOIRE TONY");
        
    }
//  Victoire SOSSA
// Horizontal
if (c1.style.BackgroundImage === "url('image/sossa2.jpg')" && c2.style.BackgroundImage === "url('image/sossa2.jpg')" && c3.style.backgroundImage === "url('image/sossa2.jpg')"){
        console.log("VICTOIRE TONY");  
    }
if (c4.style.BackgroundImage === "url('image/sossa2.jpg')" && c5.style.BackgroundImage === "url('image/sossa2.jpg')" && c6.style.backgroundImage === "url('image/sossa2.jpg')"){
        console.log("VICTOIRE TONY"); 
    }
if (c7.style.BackgroundImage === "url('image/sossa2.jpg')" && c8.style.BackgroundImage === "url('image/sossa2.jpg')" && c9.style.backgroundImage === "url('image/sossa2.jpg')"){
        console.log("VICTOIRE TONY");
        
    }
// vertical
if (c1.style.BackgroundImage === "url('image/sossa.jpg')" && c4.style.BackgroundImage === "url('image/sossa2.jpg')" && c7.style.backgroundImage === "url('image/sossa2.jpg')"){
        console.log("VICTOIRE TONY");
        
    }
if (c2.style.BackgroundImage === "url('image/sossa2.jpg')" && c5.style.BackgroundImage === "url('image/sossa2.jpg')" && c8.style.backgroundImage === "url('image/sossa2.jpg')"){
        console.log("VICTOIRE TONY");
        
    }
if (c3.style.BackgroundImage === "url('image/sossa2.jpg')" && c6.style.BackgroundImage === "url('image/sossa2.jpg')" && c9.style.backgroundImage === "url('image/sossa2.jpg')"){
        console.log("VICTOIRE TONY");
        
    }


// Diagonal
if (c1.style.BackgroundImage === "url('image/sossa2.jpg')" && c5.style.BackgroundImage === "url('image/sossa2.jpg')" && c9.style.backgroundImage === "url('image/sossa2.jpg')"){
        console.log("VICTOIRE TONY");       
    }
if (c3.style.BackgroundImage === "url('image/sossa2.jpg')" && c5.style.BackgroundImage === "url('image/sossa2.jpg')" && c7.style.backgroundImage === "url('image/sossa2.jpg')"){
        console.log("VICTOIRE TONY");       
    }

 }