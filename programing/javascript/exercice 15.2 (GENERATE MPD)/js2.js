// selection des ID
const passwordOutput = document.getElementById("password-output");
const passwordLength = document.getElementById("password-length");
const displayPasswordLength = document.getElementById("display-password-length");
const superCaseAll = document.getElementById("supercase-all");
const numbers = document.getElementById("numbers")
const Button = document.getElementById("generateButton")

// Declaration des constante
 const superCasePass = "AaBbCcDdEeFeGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz!@#$%^&*()-_=+[]{};:,.<>?/"
 const numbersPass = "0123456789"

 console.log(superCasePass);

//  Longueur du mot de pass 
passwordLength.addEventListener("input", () => {
    displayPasswordLength.value = passwordLength.value;
})  

// function pour generate un mot de pass

function generatePass() {
    let pass = "";
    if(superCaseAll.checked) pass += superCasePass;
    if(numbers.checked) pass += numbersPass;
    
    const length = parseInt(passwordLength.value);
    let password=""

    if(pass.length === 0){
        passwordOutput.value = "##ERROR##";
        return;
    }

    for (let i = 0; i < length; i++) {
        const randomPass = Math.floor(Math.random()* pass.length);
        password += pass[randomPass];
    }

    passwordOutput.value = password
    console.log("MOT DE PASS:",password);
}
generateButton.addEventListener("click", generatePass);