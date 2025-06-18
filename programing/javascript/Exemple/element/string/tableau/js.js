//ELEMENT
const h1 = document.querySelector("#bj")
console.log(h1.attributes);

const h1G = document.querySelector("h1b")
console.log(h1.classList);

const h1D = document.querySelector("h1b")
console.log(h1);


//STRING
let stringDemo = "jecri une chienne de caractére"
console.log(stringDemo);

//TABLEAU
let tab = ["moh1", "moh2", "moh3"]
console.log(tab);

console.log(typeof tab);

let obj = {
    tes : "truc",
    test : "2eme truk"
}
console.log(obj);
console.log(obj);

/****
 * @returns {string}
 * @param {string} text 
 * c'est ma fonction bonjr{)
 * 
 * 
 * ok*/ 
function bjr(text) {
    console.log("bonjour");   
    
}

bjr()

/***
 * @returns {string}
 * @param {string} text
 * 
 * okok
 */
function stringAge(text) {
    console.log("execute le code");
    return text
    
}
/**
 * 
 * @param {*} text
 * @returns {boolean}
 * bjr sava
 */
stringAge("bjour")
const text = stringAge("bjour")
console.log(text);

