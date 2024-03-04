/* || TRIM FUNCTION */


let memberName = prompt("Please Enter your Name");
console.log(memberName);
console.log(memberName.length);
let myName = memberName.trim();
console.log(memberName.trim().length);
console.log(myName);
//TRIM function is used to remove the unwanted whitespace from both the ends in a string



/*more functions to remove spaces

1.split()  and join()
2.replace()
3.reduce()
but All these functions will remove all the spaces from the string */
let empName = memberName.split(" ");
console.log(empName);
let emplName = memberName.split(" ").join("");
console.log(emplName);

