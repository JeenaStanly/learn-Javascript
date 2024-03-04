//break and continue  in loops

// BREAK

/* let lname = "emiljihnanoop";
let counter = 0;
let myLetter;
while (true) {
    myLetter = lname[counter];
    console.log(myLetter);
    counter++;
} */

//it runs continously because it doesn't have any stop condition  ,thats where we apply 'break'



let laname = "emiljohnanoop";
let counter1 = 0;
let myLetter1;
while (true) {
    myLetter1 = laname[counter1];
    console.log(myLetter1);
    if (myLetter1 === "h") break;
    counter1++;
}

//CONTINUE


let fname = "emiljohnanoop";
let counter = 0;
let myLetter;
while (true) {
    myLetter = fname[counter];
    console.log(myLetter);
    if (counter === 1) {
        counter += 2;
        continue;
    }
    if (myLetter === "h") break;
    counter++;
}
//when it meet the condition counter===1 it increment by 2 then increment by 2 then continous until the break statement