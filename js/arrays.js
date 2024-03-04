/* || ARRAYS || */

// Declaring an array

const myArray = [];
myArray[0] = "ANOOP";
myArray[1] = 176;
myArray[2] = "JK";
document.getElementById("myHeading").textContent = `Welcome ${myArray[0]}`;

// log an array
console.log(myArray);//array can include all types of data in a single array

// Length of an array
console.log(myArray.length);

// Last element in an array
console.log(myArray[myArray.length - 1]);

//How to add an element in the end of the array
let arrayLength = console.log(myArray.push("jeena"));
//push() method always return the length of an array

//How to remove an element from the end of an array
let lastItem = console.log(myArray.pop());
//pop() method always return the last item in an array

//How to add an element in the beginning of an array
myArray.unshift(1101);
console.log(myArray);
let a = console.log(myArray.unshift("bus"))//returns the length
console.log(myArray);

//How to remove an item from the beginning of an arrray
myArray.shift();
console.log(myArray);
let b = console.log(myArray.shift());//returns the first item in an array
console.log(myArray);

// how to remove an element in the middle of an array
delete myArray[2];
console.log(myArray);//delete option delete the element but it will be occupied by an undefined empty element.

// remove an element by using splice() method
myArray.splice(1, 1);
console.log(myArray);
myArray.splice(1, 0);//it won't delete any item since the count value is zero
console.log(myArray);
myArray.splice(1, 1, "52inch");//we can use splice method to replacean item
console.log(myArray);

// slice method
const letterArray = ['a', 'b', 'c', 'd', 'e', 'f'];
console.log(letterArray);
const newArray = letterArray.slice(2);
console.log(newArray);//it slice the array from 2nd position to the end
const slicedArray = letterArray.slice(2, 5);//slices from 2 to 5 but doesn't include 5th position
console.log(slicedArray);

// How to reverse an array
const reverseArray = letterArray.reverse();
console.log(reverseArray);

//How to join th elements in an array

const newString = letterArray.join();
console.log(newString);

// how to make a array from a string
const myName = 'Jeena Stanly';
const nameArray = myName.split(" ");
console.log(nameArray);
let newName = nameArray.join(" ")
console.log(newName);

//How to join two arrays

const letterArrayA = ['a', 'b', 'c'];
const letterArrayB = ['d', 'e', 'f', 'h'];
const combinedArray = letterArrayA.concat(letterArrayB);
console.log(combinedArray);
//concantenation using spread operator

const spreadArray = [...letterArrayA, ...letterArrayB];
console.log(spreadArray);
//what happens if we didn't use spread operator

const spreadArrayA = [letterArrayA, letterArrayB];
console.log(spreadArrayA);//here we get two seperate arrays in a single array ,its called "Nested array"


