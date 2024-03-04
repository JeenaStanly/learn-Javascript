/* || ERRORS IN JAVASCRIPT || */

// 1. Reference Error
/*

"use strict";

//variable = "jeena";//here we declared a variable using 'const'or 'let' but javascript reads the variable and gives the output to avoid this we use 'use strict'at the beginning of the code.
const myVariable = "dave";
console.log(myVariable);//here it will show a reference error:variable is not defined.

// 2.Syntax Error
//console..log(variable);//it will show a 'syntax error':unexpected token '.' at 
console.log(myVariable);

// 3.Type Error
//const fname = "jeena";
//fname = "veea";
//console.log(fname);
//here we get an error 'type error':assignment to constant variable
const fname = "jeena";
console.log(fname);

// How to log an error using try catch block method
const makeError = () => {
    try {
        const fname = "emil";
        fname = anoop;
    }
    catch (err) {
        console.log(err);//it will show the error as an output
        console.error(err);//it will show the error as an error with red bg
        console.warn(err);//it will show the error with green bg and a warning sign
        console.table(err);//show full error description in atable
        console.error(err.name);//name of the error
        console.warn(err.message);//it will log the message only
        console.log(err.stack);
    }
    finally{
        console.log(..finally);
    }
}
makeError();
 */