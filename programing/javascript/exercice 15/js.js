// Selcetieon des ID

const passwordOutput = document.getElementById("password-output");
const passwordLength = document.getElementById("password-length");
const displayPasswordLength = document.getElementById("display-password-length");
const lowerCase =document.getElementById("lowercase");
const upperCase = document.getElementById("uppercase")
const numbers = document.getElementById("numbers")
const symbols = document.getElementById("symbols")
const generateButton = document.getElementById("generateButton")

// Declaration des ID nécessaire

const lowerCasePass = "abcdefghijklmnopqrstuvwxyz"
const upperCasePass = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const numbersPass = "0123456789"
const symbolsPass = "!@#$%^&*()-_=+[]{};:,.<>?/"

console.log(lowerCasePass);

// Longueur du Mot De Pass
passwordLength.addEventListener("input", () =>{
   displayPasswordLength.value = passwordLength.value; 
});

// function pour genener le mot de pass

function generatePass() {
    let characters ="";
    if(lowerCase.checked) characters += lowerCasePass;
    if(upperCase.checked) characters += upperCasePass;
    if(numbers.checked) characters += numbersPass;
    if(symbols.checked) characters += symbolsPass;
    
    const length = parseInt(passwordLength.value);
    let password = "";

    if (characters.length === 0){
        passwordOutput.value = "Caractére Non-Sélectionner !";
        return;
    }

    for (let i = 0; i < length; i++) {
        const randomPass = Math.floor(Math.random() * characters.length);
        password += characters[randomPass];
    }

    passwordOutput.value = password;
    console.log("Mot De Pass: ", password);
}

// click Button

generateButton.addEventListener("click", generatePass);



