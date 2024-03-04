/* || LOOPS */

// While Loop


//Print 0 to 10Using while loop
let myVariable = 0;
while (myVariable <= 10) {
    console.log(myVariable);
    myVariable++;
}
// Print 1 to 10
let myNum = 0;
while (myNum < 10) {
    myNum++;
    console.log(myNum);
}

// Do While Loop
let myNumber = 10;
do {
    console.log(myNumber);
    myNumber++;
} while (myNumber <= 5)
// do loop runs the code atleast for once whether it satisfy the condition or not 

//how to print each character in a name 
let firstName = "anoop";
let x = 0;
do {
    console.log(firstName.charAt(x));
    x++;
}
while (x < firstName.length);

//For loop
for (let i = 0; i <= 5; i++) {
    console.log(i)
}

let i = 1;
for (; i <= 7;) {
    console.log(i);
    i++;
}

for (let i = 1; i <= 5;) {
    console.log(i);
    i++;
}

//how to print characters in you name
let fName = "deves";
for (let i = 0; i < fName.length; i++) {
    console.log(fName.charAt(i));
}




