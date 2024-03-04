
//* NUMBERS */

/*How to declre an integer number in javascript  */
let myNumber = 42;
const mynum = 34;
let myFloat = 42.253;
let myString = "42";


/*check the type of a number  */
console.log(typeof myNumber);
console.log(typeof myFloat);

/* Comparing two numbers */
console.log(myNumber === myFloat);
console.log(myNumber === Number.parseInt(myFloat));
console.log(myNumber === myString);
console.log(myNumber === Number(myString));


/* How to get a number declared as string */

console.log(typeof myString);
console.log(Number(myString));//changing a string to a number 
console.log(myString + 3);
console.log(Number(myString) + 3);

/* How to parse an integer number from a float number, given that the letters should follow the number*/
console.log(Number.parseInt(myFloat));
console.log(Number.parseFloat("45.02abc"));

/* How to parse anumber from a string, given that the letters should follow the number */
let mystr = "45.023abc";
console.log(Number.parseInt(mystr));
console.log(typeof Number.parseInt(mystr));//Number.parseInt parse the number from a string //

console.log(Number.parseFloat(mystr).toFixed(2));
console.log(typeof Number.parseFloat(mystr).toFixed(2));//when we add .toFixed property it change a number type to string//
console.log(Number.parseFloat(mystr));
console.log(typeof Number.parseFloat(mystr));

console.log(Number("jeena"));// NaN means not a number
console.log(Number(true));// number of true returns 1
console.log(Number(false));// number of false returns 0
console.log(Number(undefined));//NaN

/* How to check whether a number is integer */

console.log(Number.isInteger(myFloat));
console.log(Number.isInteger(myNumber));
console.log(Number.isInteger(myString));

/* How to return a float number upto a specific decimal point */
console.log(myFloat.toFixed(2));

/* How to change a number to string */
let length = 85;
console.log(length);
console.log(typeof length);
console.log(length.toString());
console.log(typeof length.toString());

/* isNaN function */
console.log(isNaN(myString));
console.log(isNaN(myFloat));
console.log(isNaN("jeena"));
console.log(isNaN(length));
console.log(Number.isNaN("undefined"));
