/* || USER INPUTS */

//ALERT Message

alert("Hello World");//we are not getting any input values from an alert message

//CONFIRM Message

let myBoolean = confirm("1.To confirm press ok \n2.To cancel press cancel");
console.log(myBoolean);//In confirm we get 2 inputs if they press Ok we get true as input ,if they press Cancel we get false as the input

let fullName = prompt("Enter your name");
if (fullName) {
    console.log(fullName);
}
else {
    alert("enter your name to continue");
    fullName = prompt("enter your name");
    console.log(fullName)
}
document.getElementById("myHeading").textContent = `Welcome ${fullName}`; // the quotation mark we used is not a single quotation its called "backtick or acute we can notice this key in the leftside of the keyboard"

