/* || SCOPE || */

// Global Scope

var x = 10;
let y = 20;
const z = 30;
console.log(`global: ${x}`);
console.log(`global: ${y}`);
console.log(`global: ${z}`);
//console.log(a); we get a as undefined since it declared locally.

//LOcal Scope

// 1. Function Scope

function myFunction() {
    let y = 40;//here y&z are reassigned because here we are declaring y,z as local scope its value will not move upward to the value
    //let declare a value in local scope and try to log that in global space
    //let a = 90;
    const z = 50;
    console.log(`function: ${y}`);
    console.log(`function: ${z}`);
    console.log(`function: ${x}`);// here x=10 bz x is declared globally that means it can be used in entire code

}
myFunction()

// 2.block scope

function sum() {
    let a = 60;
    const b = 40;
    //console.log(c); we not get the value of c since it is declared in block scope
    if (a = 60) {
        let d = 10;
        let c = a + b + d;
        console.log(c);
    }
}
sum()