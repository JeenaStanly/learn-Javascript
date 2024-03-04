/* || MATH FUNCTIONS*/

console.log(Math.PI);//prints the value of PI
console.log(Math.trunc(Math.PI));//trunc property removes all the decimal place values
console.log(Math.round(Math.PI));//round property is used to round the value.
console.log(Math.round(3.14));//rounded down to 3
console.log(Math.round(3.54));//rounded up to 4
console.log(Math.ceil(Math.PI));
console.log(Math.ceil(4.4));//ceil property rounds to next number.
console.log(Math.floor(Math.PI));
console.log(Math.floor(4.5));//floor function round the number to greatest integer less than or equal to it
console.log(Math.pow(2, 3));
console.log(Math.pow(3, 4));//returns the power

console.log(Math.min(35, 45, 30));//finds the smallest number
console.log(Math.max(35, 45, 30));//returns the largest number

/* Create Random Numbers */
console.log(Math.random());//each random function returns different values that ranges from 0 to 1
console.log(Math.random());
console.log(Math.random());

/* How to generate random nubers from 1 to 10 */

console.log(Math.floor(Math.random() * 10) + 1);//generate random numbers from 1 to 10
console.log(Math.floor(Math.random() * 10) + 1);
console.log(Math.floor(Math.random() * 10) + 1);

/* How to generate random nubers from 1 to 4 */

console.log(Math.floor(Math.random() * 4) + 1);
console.log(Math.floor(Math.random() * 4) + 1);
console.log(Math.floor(Math.random() * 4) + 1);//generate random numbers from 1 to 4

console.log(Math.floor(Math.random() * 4));//by removing " + 1" it generate random numbers from 0 to 3 and doesn't include 4


/* Random letters from any name */
let myName = "gretta";
console.log(myName.charAt(Math.floor(Math.random() * myName.length)));
console.log(myName.charAt(Math.floor(Math.random() * myName.length)));
console.log(myName.charAt(Math.floor(Math.random() * myName.length)));
console.log(myName.charAt(Math.floor(Math.random() * myName.length)));
//In this Program first it generate the random number and multiply with the length of the string and it rounds to its lesser integer using floor function .This number then used to find the position of the letter using charat() function and returns the random letters
