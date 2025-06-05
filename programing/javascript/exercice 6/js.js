const c1 = document.querySelector(`#c1`)
const c2 = document.querySelector(`#c2`)
const c3 = document.querySelector(`#c3`)
const c4 = document.querySelector(`#c4`)
const c5 = document.querySelector(`#c5`)
const c6 = document.querySelector(`#c6`)
const c7 = document.querySelector(`#c7`)
const c8 = document.querySelector(`#c8`)
const c9 = document.querySelector(`#c9`)

// button game play

const button = document.getElementById("gameButton");

let isPlaying = false;
let timeout = null;


 button.addEventListener("click", () => {
      // Bloque les clics pendant l’attente
      if (timeout) return;
    // change le txt en "lest go" 
if (!isPlaying)
      button.textContent = "LEST GO !!";

      if (button.textContent === "PLAY GAME") {
        button.textContent = "RESTART";
      
    // else {
    //     button.textContent = "PLAY GAME";
    //   }

      timeout = setTimeout(() => {
        // isFinish = true; //La PARTIE PEUT COMMENCER//
        // isFinish + false; // Debloque le jeu//
        // turnePlayer = 0; // remet e joueur a 0//
        // changeCurrentPlayer()

        isPlaying = !isPlaying;
        button.textContent = isPlaying ? "RESTART" : "PLAY GAME";
        timeout = null;
      }, 1500);// 1 secondes
    }
    

 // Réinitialisation de la grille
    else {
        const cells = [c1, c2, c3, c4, c5, c6, c7, c8, c9];
        cells.forEach(cell => {
        cell.style.backgroundImage = "";
     });
    isFinish = false;
}

  // Remise à zéro du joueur
  turnePlayer = 0;
}, 3000);



    
    // });
    console.log(button);

    // button.addEventListener("click", () => {
    //   if (button.textContent === "PLAY GAME") {
    //     button.textContent = "RESTART";
    //   }
    // else {
    //     button.textContent = "PLAY GAME";
    //   }
    // });
    
   



// const test = document.querySelectorAll

let turnePlayer = 0;
// let turnePlayer = "Nom Du Joueur";



c1.addEventListener(`click`, () =>{
    if (isFinish) return;
    if (c1.style.backgroundImage !== ""){
        return
    }

    
    if (turnePlayer == 0){
        c1.style.backgroundImage = "url('image/tony2.jpg')";
        turnePlayer = 1
    }
    else{
        c1.style.backgroundImage = "url('image/sossa2.jpg')";
        turnePlayer = 0
    }

    changeCurrentPlayer();
    verifVictoire()
    verifMatchNul();

    // if (c1.style.backgroundImage == "#ff000079"){
    //     console.log("Gagne");
        
    // }




})
c2.addEventListener(`click`, () =>{
    if (isFinish) return;
    if (c2.style.backgroundImage !== ""){
        return
    }
if (turnePlayer == 0){
    c2.style.backgroundImage = "url('image/tony2.jpg')";
    turnePlayer = 1
}
else
    {
    c2.style.backgroundImage = "url('image/sossa2.jpg')";
    turnePlayer = 0
    }
    if (c1.style.backgroundImage && c2.style.backgroundImage && c3.style.backgroundImage == "url('image/tony2.jpg')"){
        console.log("VICTOIRE");
        
    }
    changeCurrentPlayer();
    verifVictoire()
    verifMatchNul();
})


c3.addEventListener(`click`, () =>{
    if (isFinish) return;
    if (c3.style.backgroundImage !== ""){
        return
    }
if (turnePlayer == 0){
    c3.style.backgroundImage = "url('image/tony2.jpg')";
    turnePlayer = 1
    }
else
    {
    c3.style.backgroundImage = "url('image/sossa2.jpg')";
    turnePlayer = 0
    }
    changeCurrentPlayer();
    verifVictoire()
    verifMatchNul();
})

c4.addEventListener(`click`, () =>{
    if (isFinish) return;
     if (c4.style.backgroundImage !== ""){
        return
    }
if (turnePlayer == 0){
    c4.style.backgroundImage = "url('image/tony2.jpg')";
    turnePlayer = 1
    }
else
    {
    c4.style.backgroundImage = "url('image/sossa2.jpg')";
    turnePlayer = 0
    }
    changeCurrentPlayer();
    verifVictoire()
    verifMatchNul();
})

c5.addEventListener(`click`, () =>{
    if (isFinish) return;
     if (c5.style.backgroundImage !== ""){
        return
    }
if (turnePlayer == 0){
    c5.style.backgroundImage = "url('image/tony2.jpg')";
    turnePlayer = 1
    }
else
    {
    c5.style.backgroundImage = "url('image/sossa2.jpg')";
    turnePlayer = 0
    }
    changeCurrentPlayer();
    verifVictoire()
    verifMatchNul();
})

c6.addEventListener(`click`, () =>{
    if (isFinish) return;
     if (c6.style.backgroundImage !== ""){
        return
    }
if (turnePlayer == 0){
    c6.style.backgroundImage = "url('image/tony2.jpg')";
    turnePlayer = 1
    }
else
    {
    c6.style.backgroundImage = "url('image/sossa2.jpg')";
    turnePlayer = 0
    }
    changeCurrentPlayer();
    verifVictoire()
    verifMatchNul();
})

c7.addEventListener(`click`, () =>{
    if (isFinish) return;
     if (c7.style.backgroundImage !== ""){
        return
    }
if (turnePlayer == 0){
    c7.style.backgroundImage = "url('image/tony2.jpg')";
    turnePlayer = 1
    }
else
    {
    c7.style.backgroundImage = "url('image/sossa2.jpg')";
    turnePlayer = 0
    }
    changeCurrentPlayer();
    verifVictoire()
    verifMatchNul();
})

c8.addEventListener(`click`, () =>{
    if (isFinish) return;
     if (c8.style.backgroundImage !== ""){
        return
    }
if (turnePlayer == 0){
    c8.style.backgroundImage = "url('image/tony2.jpg')";
    turnePlayer = 1
    }
else
    {
    c8.style.backgroundImage = "url('image/sossa2.jpg')";
    turnePlayer = 0
    }
    changeCurrentPlayer();
    verifVictoire()
    verifMatchNul();
})

c9.addEventListener(`click`, () =>{
    if (isFinish) return;
     if (c9.style.backgroundImage !== ""){
        return
    }
if (turnePlayer == 0){
    c9.style.backgroundImage = "url('image/tony2.jpg')";
    turnePlayer = 1
    }
else
    {
    c9.style.backgroundImage = "url('image/sossa2.jpg')";
    turnePlayer = 0
    }
    changeCurrentPlayer();
    verifVictoire()
    verifMatchNul();
})



//  CONDITION DE VICTOIRE //

 function verifVictoire(){

    // const winTony = "url('image/tony2.jpg')";
    // const winSossa = "url('image/sossa2.jpg')";

    //  const winCombosVictoire = [
    //     [c1, c2, c3],
    //     [c4, c5, c6],
    //     [c7, c8, c9],
    //     [c1, c4, c7],
    //     [c2, c5, c8],
    //     [c3, c6, c9],
    //     [c1, c5, c9],
    //     [c3, c5, c7]
    // ];
// for (let comboV of winCombosVictoire){
    //     const [a,b,c] = comboV



   // VICTOIRE TONY //

    // Horizontal //
    
if (c1.style.backgroundImage.includes("tony2.jpg") && c2.style.backgroundImage.includes("tony2.jpg") && c3.style.backgroundImage.includes("tony2.jpg")){
        console.log("VICTOIRE TONY"); 
        scoreTony++;
        scoreTonySpan.textContent = scoreTony;
        isFinish = true;
        return;
    }
if (c4.style.backgroundImage.includes("tony2.jpg") && c5.style.backgroundImage.includes("tony2.jpg") && c6.style.backgroundImage.includes("tony2.jpg")){
        console.log("VICTOIRE TONY");
        scoreTony++;
        scoreTonySpan.textContent = scoreTony;
        isFinish = true;
        return;
    }
if (c7.style.backgroundImage.includes("tony2.jpg") && c8.style.backgroundImage.includes("tony2.jpg") && c9.style.backgroundImage.includes("tony2.jpg")){
        console.log("VICTOIRE TONY"); 
        scoreTony++;
        scoreTonySpan.textContent = scoreTony;
        isFinish = true;
        return;
    }
// vertical //
if (c1.style.backgroundImage.includes("tony2.jpg") && c4.style.backgroundImage.includes("tony2.jpg") && c7.style.backgroundImage.includes("tony2.jpg")){
        console.log("VICTOIRE TONY");  
        scoreTony++;
        scoreTonySpan.textContent = scoreTony;
        isFinish = true;
        return;
    }
if (c2.style.backgroundImage.includes("tony2.jpg") && c5.style.backgroundImage.includes("tony2.jpg") && c8.style.backgroundImage.includes("tony2.jpg")){
        console.log("VICTOIRE TONY"); 
        scoreTony++;
        scoreTonySpan.textContent = scoreTony;
        isFinish = true;
        return;
    }
if (c3.style.backgroundImage.includes("tony2.jpg") && c6.style.backgroundImage.includes("tony2.jpg") && c9.style.backgroundImage.includes("tony2.jpg")){
        console.log("VICTOIRE TONY");  
        scoreTony++;
        scoreTonySpan.textContent = scoreTony;
        isFinish = true;
        return;
    }
// diagonal //
if (c1.style.backgroundImage.includes("tony2.jpg") && c5.style.backgroundImage.includes("tony2.jpg") && c9.style.backgroundImage.includes("tony2.jpg")){
        console.log("VICTOIRE TONY"); 
        scoreTony++;
        scoreTonySpan.textContent = scoreTony;
        isFinish = true;
        return;
    }
if (c3.style.backgroundImage.includes("tony2.jpg") && c5.style.backgroundImage.includes("tony2.jpg") && c7.style.backgroundImage.includes("tony2.jpg")){
        console.log("VICTOIRE TONY"); 
        scoreTony++;
        scoreTonySpan.textContent = scoreTony;
        isFinish = true;
        return;
    }


//  Victoire SOSSA //

    // Horizontal //

if (c1.style.backgroundImage.includes("sossa2.jpg") && c2.style.backgroundImage.includes("sossa2.jpg") && c3.style.backgroundImage.includes("sossa2.jpg")){
        console.log("VICTOIRE SOSSA");
        scoreSossa++;
        scoreSossaSpan.textContent = scoreSossa;
        isFinish = true;
        return;
    }
if (c4.style.backgroundImage.includes("sossa2.jpg") && c5.style.backgroundImage.includes("sossa2.jpg") && c6.style.backgroundImage.includes("sossa2.jpg")){
        console.log("VICTOIRE SOSSA"); 
        scoreSossa++;
        scoreSossaSpan.textContent = scoreSossa;
        isFinish = true;
        return;
    }
if (c7.style.backgroundImage.includes("sossa2.jpg") && c8.style.backgroundImage.includes("sossa2.jpg") && c9.style.backgroundImage.includes("sossa2.jpg")){
        console.log("VICTOIRE SOSSA");   
        scoreSossa++;
        scoreSossaSpan.textContent = scoreSossa;
        isFinish = true;
        return;
    }
// vertical //
if (c1.style.backgroundImage.includes("sossa2.jpg") && c4.style.backgroundImage.includes("sossa2.jpg") && c7.style.backgroundImage.includes("sossa2.jpg")){
        console.log("VICTOIRE SOSSA"); 
        scoreSossa++;
        scoreSossaSpan.textContent = scoreSossa;
        isFinish = true;
        return;
    }
if (c2.style.backgroundImage.includes("sossa2.jpg") && c5.style.backgroundImage.includes("sossa2.jpg") && c8.style.backgroundImage.includes("sossa2.jpg")){
        console.log("VICTOIRE SOSSA");   
        scoreSossa++;
        scoreSossaSpan.textContent = scoreSossa;
        isFinish = true;
        return;
    }
if (c3.style.backgroundImage.includes("sossa2.jpg") && c6.style.backgroundImage.includes("sossa2.jpg") && c9.style.backgroundImage.includes("sossa2.jpg")){
        console.log("VICTOIRE SOSSA"); 
        scoreSossa++;
        scoreSossaSpan.textContent = scoreSossa;
        isFinish = true;
        return;
    }
// Diagonal //

if (c1.style.backgroundImage.includes("sossa2.jpg") && c5.style.backgroundImage.includes("sossa2.jpg") && c9.style.backgroundImage.includes("sossa2.jpg")){
        console.log("VICTOIRE SOSSA"); 
        scoreSossa++;
        scoreSossaSpan.textContent = scoreSossa;
        isFinish = true;
        return;
    }
if (c3.style.backgroundImage.includes("sossa2.jpg") && c5.style.backgroundImage.includes("sossa2.jpg") && c7.style.backgroundImage.includes("sossa2.jpg")){
        console.log("VICTOIRE SOSSA");
        scoreSossa++;
        scoreSossaSpan.textContent = scoreSossa;
        isFinish = true;
        return;
    }

 }

//  SYSTEM TOUR PAR TOUR :
const currentPlayerSpan = document.getElementById("currentPlayer")

function changeCurrentPlayer() {
    currentPlayerSpan.textContent = turnePlayer === 0 ?  " TONY" : " SOSSA";
}
changeCurrentPlayer();


let isFinish = false //block la partie après victoire//

// CONDITION DE MACTH NUL (DRAW) : 

function verifMatchNul(){
    const allCases = [c1,c2,c3,c4,c5,c6,c7,c8,c9].every(cell => cell.style.backgroundImage !=="");
    if (allCases && !isFinish) {
        console.log("MATCH NUL");
        scoreDraw++;
        scoreDrawSpan.textContent = scoreDraw
        isFinish = true  
    }
}

//  COMPTEUR DE POINT : //
let scoreTony = 0;
let scoreSossa = 0;
let scoreDraw = 0;

const scoreTonySpan = document.getElementById("scoreTony");
const scoreSossaSpan = document.getElementById("scoreSossa");
const scoreDrawSpan = document.getElementById("scoreDraw")









// ANIMATION EN CA DE VICTOIRE (ex: LIGNE PR VALIDER LA VICOIRE VISU):
// CHOIX DES NOMS :