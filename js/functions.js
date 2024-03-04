/*  ||FUNCTIONS */

function sum(num1, num2) {
    return num1 + num2;
}
console.log(sum(6, 5));

function getUsernameFromEmail(mail) {
    return mail.slice(0, mail.indexOf("@"));
}
console.log(getUsernameFromEmail("anoopjohneee@gmail.com"));
// for declaring a function start wit function and function name with parameters included and a code block which is reusable eg:- function sum(a,b){}
let first;
function firstName(name) {
    first = name.split(" ");
    return first[0];

}
function lastName(name) {
    first = name.split(" ");
    return first[1];

}
console.log("Firstname:", firstName("Anoop John"), "\nLastname:", lastName("Anoop John"));

// this function helps to seperate the first name and last name from the given name 

/* Anonymous Function Declaration */

// here we don't provide a name for a function let look how it works,here we declare the function name as constatnt variable
const addition = function (a, b) {
    return a + b;
}
console.log(addition(6, 3));

/* Arrow Function */

//here we eliminate the word function itselfand replace it with arrow
const sub = (a, b) => {
    return a - b;
}
console.log(sub(10, 4));

// create a propercase for a name

const properCase = (name) => {
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
}
console.log(properCase("jeeNa"));
console.log(properCase("september"));